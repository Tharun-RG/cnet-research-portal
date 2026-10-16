/* =========================================================================
   buildVectors.js  -  run ONCE (and again whenever facultyData.js changes)

   Setup (one time, in this folder):
     npm install @huggingface/transformers@3.0.0
   Run:
     node buildVectors.js
   Output:
     facultyVectors.js   (loaded by index.html before semanticSearch.js)
   ========================================================================= */
const fs = require("fs");
const vm = require("vm");

(async () => {
  // Load your real data + the same chunking code the website uses
  const ctx = { console };
  ctx.globalThis = ctx; ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync("facultyData.js", "utf8") + "\nthis.VIT_FACULTY = VIT_FACULTY;", ctx);
  vm.runInContext(fs.readFileSync("semanticSearch.js", "utf8"), ctx);

  const { chunksOf, hashChunks, MODEL_NAME } = ctx.FacultySearch._internals;
  if (typeof hashChunks !== "function" || !MODEL_NAME) {
    console.error("\nERROR: your semanticSearch.js is an OLD version.");
    console.error("Replace it with the latest semanticSearch.js, then run this script again.");
    process.exit(1);
  }

  const { pipeline } = await import("@huggingface/transformers");
  console.log("Loading model (first run downloads ~25 MB)...");
  const extractor = await pipeline("feature-extraction", MODEL_NAME, { dtype: "q8" });

  const data = {};
  for (const fac of ctx.VIT_FACULTY) {
    const chunks = chunksOf(fac, true);
    if (!chunks.length) continue;
    const out = await extractor(chunks.map(c => c.text), { pooling: "mean", normalize: true });
    const dim = out.dims[1];
    const vecs = [];
    for (let i = 0; i < chunks.length; i++) {
      vecs.push(Array.from(out.data.slice(i * dim, (i + 1) * dim), x => Math.round(x * 1e4) / 1e4));
    }
    data[fac.id] = { hash: hashChunks(chunks), vecs };
    console.log(`  ${fac.name}: ${chunks.length} chunks embedded`);
  }

  const file = "window.FACULTY_VECTORS = " + JSON.stringify({ model: MODEL_NAME, data }) + ";\n";
  fs.writeFileSync("facultyVectors.js", file);
  console.log(`\nDone. facultyVectors.js written (${(file.length / 1024).toFixed(0)} KB).`);
})();

/* =========================================================================
   FACULTY DATASET & QUICK FILTER TAGS
   ========================================================================= */

const QUICK_TAGS = [
  "All Topics",
  "Power Electronics",
  "Renewable Energy & EV",
  "Smart Grid & Microgrid",
  "Hydrogen & Fuel Cells",
  "Battery & Energy Storage",
  "Robotics & IoT"
];

const VIT_FACULTY = [
  {
    id: "fac-1",
    name: "Dr. N RAJASEKAR",
    image: "./rajasekar.jpg",
    designation: "Professor Higher Academic Grade",
    school: "Center for Net Zero Technologies",
    department: "Center for Net Zero Technologies",
    cabin: "TT-239",
    email: "nrajasekar@vit.ac.in",

    // Research Details (Area of Specialization)
    researchDetails: "Power Electronics \n Smart Grid \n Optimization Techniques \n Renewable Energy Systems \n Fuel Cells\nORCID: https://orcid.org/0000-0001-6489-1736\nScopus: https://www.scopus.com/authid/detail.uri?authorId=35090434600\nGoogle Scholar: https://scholar.google.co.in/citations?user=OZkmc-sAAAAJ&hl=en\nh-index: 35  \ni10-index: 57",

    // Ongoing Consulting Project Details
    ongoingConsultingProjects: [
      {
        title: "Solar Photovoltaic plant transformer failure study",
        client: "ICA",
        duration: "Ongoing",
        amount: "Consultancy Grant"
      }
    ],

    // Completed Funded Project Details
    completedFundedProjects: [
      {
        title: "Intelligent off grid system for an energy sustainable village",
        agency: "DST",
        grantAmount: "Sponsored",
        completedYear: "Completed"
      },
      {
        title: "Real Time Investigation on Challenges involved in Fault Detection of PV systems",
        agency: "VIT",
        grantAmount: "Internal Seed",
        completedYear: "Completed"
      },
      {
        title: "Recovery of chromium from Industrial Dump using Electro-kinetic Remediation",
        agency: "VIT",
        grantAmount: "Internal Seed",
        completedYear: "Completed"
      },
      {
        title: "Strategic Power Management Technique for Integration of RE in Autonomous Microgrid",
        agency: "VIT",
        grantAmount: "Internal Seed",
        completedYear: "Completed"
      },
      {
        title: "Design and Implementation of Maximum Power Point Tracking (MPPT) for Solar PV",
        agency: "VIT",
        grantAmount: "Internal Seed",
        completedYear: "Completed"
      }
    ],

    // Book / Book Chapters Published
    booksPublished: [
      "Nature-Inspired Methods for Metaheuristics Optimization (2018)",
      "Advances in Nature-Inspired Methods for Metaheuristics Optimization (2020)"
    ],

    specialization: ["Power Electronics", "Smart Grid", "Renewable Energy & EV", "Fuel Cells"],
    roleCategory: ["PROFESSOR", "PHD_SUPERVISOR", "BTECH", "MTECH"],
    scholarLink: "https://scholar.google.co.in/citations?user=OZkmc-sAAAAJ&hl=en"
  },

  {
    id: "fac-2",
    name: "Dr. Elangovan D",
    image: "./elangovan.jpg",
    designation: "Professor Higher Academic Grade",
    school: "Center for Net Zero Technologies",
    department: "Center for Net Zero Technologies",
    cabin: "Not Available",
    email: "delangovan@vit.ac.in",

    // Research Details (Area of Specialization)
    researchDetails: "Wireless Chargers for EV  \nDC-to-DC Converters for RE \nSustainable Transportation \nSmart DC Grid \nFuel Cell Vehicles\nORCID: https://orcid.org/0000-0001-8284-276X\nScopus: https://www.scopus.com/authid/detail.uri?authorId=37055454800\nGoogle Scholar: https://scholar.google.com/citations?hl=en&user=L1VHqW0AAAAJ\nh-index: 18 \ni10-index: 24",

    // Ongoing Consulting Project Details
    ongoingConsultingProjects: [
      {
        title: "Design and Development of a 1 kW PEM Fuel Cell Stack for Stationary Generator",
        client: "Super Flow Technologies, Namakkal, Tamil Nadu",
        duration: "Ongoing",
        amount: "Consultancy Grant"
      },
      {
        title: "Autonomous Drone for Inventory Management Phase-II",
        client: "Pedigri Technologies, United Arab Emirates",
        duration: "Ongoing",
        amount: "International Grant"
      }
    ],

    // Completed Funded Project Details
    completedFundedProjects: [
      {
        title: "Fuel Cell Powered Electric Biocycles With Solar Generator Refuelling Technique",
        agency: "DST (Indo-Egypt), International",
        grantAmount: "Funded",
        completedYear: "Completed"
      },
      {
        title: "Design and development of a 4-wheeled electric vehicle for research and outreach",
        agency: "Royal Academy of Engineering - UK",
        grantAmount: "International Grant",
        completedYear: "Completed"
      }
    ],

    // Completed Consultancy Projects
    completedConsultancyProjects: [
      {
        title: "Autonomous RFID-Enabled Drone for Warehouse Inventory Management (Phase-I)",
        agency: "Pedigri Technologies, UAE"
      },
      {
        title: "Enhancement of nuOCR project (Phase-1)",
        agency: "Nuvento Systems Private Ltd, India"
      },
      {
        title: "Software Development for Hospital Management System",
        agency: "Sri Thirumala Physiotherapy and Pain Relief Clinic, India"
      }
    ],

    // Ongoing Funded Projects
    ongoingFundedProjects: [
      {
        title: "Development of fuel cell Three-Wheeler for urban Green Transportation in India",
        agency: "Royal Academy of Engineering - UK"
      }
    ],

    // Patents Published Details
    patentsPublished: [
      {
        title: "A Liquid-Cooled Battery Thermal Management System for a Two-Wheeler Vehicle (App No: 202141005377)"
      },
      {
        title: "Autonomous Multipurpose Agricultural Rover Powered by Flexible Solar PV Sheet (App No: 202441003805)"
      }
    ],

    // Patents Granted Details
    patentsGranted: [
      { title: "A Smart Photovoltaic Tied Unified Power Quality Conditioner System (Grant No: 539157)" },
      { title: "Flexible Distance Wireless Charger for Electrified Vehicles (Grant No: 474583)" },
      { title: "Current Fed Fuel Cell Powered High Voltage Charging Circuit for EVs (Grant No: 442627)" },
      { title: "Renewable Energy Powered Wireless Fast Charger for Electric Bicycle (Grant No: 364892)" },
      { title: "V2G and G2V Wireless Charger for Renewable Powered Electric Bicycles (Grant No: 521818)" }
    ],

    // Book / Book Chapters Published
    booksPublished: [
      "Naturally clamped, isolated, high-gain DC-DC converter with voltage doubler for battery charging of EVs and PHEVs (2017)",
      "Development of fuel cell Three-Wheeler for urban Green Transportation in India (Royal Academy of Engineering - UK)"
    ],

    specialization: ["Renewable Energy & EV", "Robotics & IoT", "Power Electronics", "Fuel Cells"],
    roleCategory: ["PROFESSOR", "PHD_SUPERVISOR", "BTECH", "MTECH"],
    scholarLink: "https://scholar.google.com/citations?hl=en&user=L1VHqW0AAAAJ"
  },

  {
    id: "fac-3",
    name: "Dr. KALAISELVAN N",
    image: "./kalaiselvan.jpg",
    designation: "Associate Professor Grade 1",
    school: "Center for Net Zero Technologies",
    department: "Center for Net Zero Technologies",
    cabin: "SJT-613",
    email: "kalaiselvan.n@vit.ac.in",

    // Research Details (Area of Specialization)
    researchDetails: "Solar Photovoltaic Technology \nGreen Hydrogen \nE-waste Circular Economy \nElectric Vehicles\nORCID: https://orcid.org/0000-0003-3434-930X\nScopus: 57224953197\nGoogle Scholar: https://scholar.google.com/citations?user=C7IWdXQAAAAJ&hl=en\nh-index: 10 \ni10-index: 10",

    // Ongoing Consulting Project Details
    ongoingConsultingProjects: [
      {
        title: "Design and development of a 1 kW PEM fuel cell stack for stationary generator (CP25260048)",
        client: "Super Flow Technologies, Namakkal, India",
        duration: "Ongoing",
        amount: "₹15,93,000"
      }
    ],

    // Completed Funded Project Details
    completedFundedProjects: [
      {
        title: "Design and develop a sustainable solar vehicle for medical emergency",
        agency: "E-cell, Faculty Startup Venture - VIT Vellore",
        grantAmount: "Funded",
        completedYear: "Completed"
      },
      {
        title: "Design and Fabrication of New Dye Sensitized Solar Cell with Supercapacitor",
        agency: "VIT SEED Grant",
        grantAmount: "Seed Fund",
        completedYear: "Completed"
      }
    ],

    // Completed Consultancy Projects
    completedConsultancyProjects: [
      {
        title: "Autonomous RFID-Enabled Drone for Efficient Warehouse Inventory Management",
        agency: "Pedigri Technologies, UAE"
      },
      {
        title: "Enhancement of nuOCR project phase - 1",
        agency: "Nuvento Systems Private Ltd, India"
      },
      {
        title: "Software Development for Hospital Management System",
        agency: "Sri Thirumala Physiotherapy and Pain Relief Clinic, India"
      }
    ],

    // Ongoing Funded Projects
    ongoingFundedProjects: [
      {
        title: "Design and development of hybrid solar stove",
        agency: "E-cell, Faculty Startup Venture - VIT Vellore"
      }
    ],

    // Patents Published Details
    patentsPublished: [
      { title: "Fingerprint Secured Adaptive Wireless Power Transmission Mobile Locker Box (App: 202541030598)" },
      { title: "Smart Cleaning Robot for Solar Photovoltaic (PV) Module (App: 202441102991)" },
      { title: "Recycling PV Module Waste into High-Performance Supercapacitor Energy Storage (App: 202541115882)" },
      { title: "Portable Floating Electrolyzer Device for Sustainable Hydrogen Generation (App: 202541103990)" }
    ],

    // Patents Granted Details
    patentsGranted: [
      { title: "Solar Powered Autonomous Electric Vehicle (Grant No: 414045-001)" },
      { title: "Automatic Cleaning Robot for PV Module (Grant No: 411594-001)" },
      { title: "Portable Solar PV Kettle (Grant No: 402492-001)" },
      { title: "Multi-Purpose Cabinet Solar Dryer (Grant No: 398719-001)" }
    ],

    // Book / Book Chapters Published
    booksPublished: [
      "Design and Performance Analysis of Maximum Power Extraction Charge Controller (MPECC) for Solar Photovoltaic System (2025)"
    ],

    specialization: ["Solar PV Technology", "Green Hydrogen", "E-Waste Circular Economy", "Renewable Energy & EV"],
    roleCategory: ["ASSOC_PROF", "PHD_SUPERVISOR", "BTECH"],
    scholarLink: "https://scholar.google.com/citations?user=C7IWdXQAAAAJ&hl=en"
  },

  {
    id: "fac-4",
    name: "Dr. SANTANU KUMAR DASH",
    image: "./santanu.jpg",
    designation: "Associate Professor Grade 1",
    school: "Center for Net Zero Technologies",
    department: "Center for Net Zero Technologies",
    cabin: "CBMR-106C",
    email: "santanukumar.dash@vit.ac.in",

    // Research Details (Area of Specialization)
    researchDetails: "Power System \nPower Electronics \nRenewable Energy System \nMicrogrid \nSmart Grid \nSustainable Transportation \nDC/AC Microgrid \nPower Quality \nIoT \nDigital Twin \nAI/ML\nORCID: 0000-0002-1816-0075\nScopus: 57195355671\nGoogle Scholar: https://scholar.google.co.in/citations?user=Fvu08xIAAAAJ&hl=en\nh-index: 19 \ni10-index: 40",

    ongoingConsultingProjects: [],

    // Completed Funded Project Details
    completedFundedProjects: [
      {
        title: "Active thermal management based Smart charge controller for EV application",
        agency: "VIT SEED GRANT",
        grantAmount: "Funded",
        completedYear: "2022"
      }
    ],

    // Patents Published Details
    patentsPublished: [
      { title: "System and Method for Controlling and Operating Lights in a Commercial Shop Environment (App: 202441057103)" },
      { title: "Mask Decontamination Apparatus and Image Pipelining with Encrypted Ledger (App: 202441011687)" }
    ],

    // Patents Granted Details
    patentsGranted: [
      { title: "A Smart Photovoltaic Tied Unified Power Quality Conditioner System (App: 202141055872)" },
      { title: "Solar-Powered Portable Aquaponics System (Grant No: 420019-001)" },
      { title: "Multi-Gas Sensor Housing (Grant No: 412709-001)" },
      { title: "Solar Vertical Tower Garden (Grant No: 409266-001)" },
      { title: "Portable Wind-Solar Powered EV Charging Station (Grant No: 400576-001)" }
    ],

    // Books / Book Chapters Published
    booksPublished: [
      "Performance Improvement of Hysteresis Current Controller based 3-Phase Shunt Active Power Filter (2013)",
      "Energy planning for a sustainable transition to a decarbonized generation scenario (2023)"
    ],

    specialization: ["Power System", "Power Electronics", "Renewable Energy & EV", "Smart Grid & Microgrid", "IoT & Digital Twin"],
    roleCategory: ["ASSOC_PROF", "PHD_SUPERVISOR", "BTECH", "MTECH"],
    scholarLink: "https://scholar.google.co.in/citations?user=Fvu08xIAAAAJ&hl=en"
  },

  {
    id: "fac-5",
    name: "Dr. SOUNDHARRAJAN",
    image: "./soundharrajan.jpg",
    designation: "Associate Professor Grade 1",
    school: "Center for Net Zero Technologies",
    department: "Center for Net Zero Technologies",
    cabin: "Not Available",
    email: "soundharrajan.v@vit.ac.in",

    // Research Details (Area of Specialization)
    researchDetails: "Materials for Energy Storage \nSodium Ion Batteries \nZinc Ion Batteries \nManganese Ion Batteries\nORCID: https://orcid.org/0000-0003-0232-0705\nScopus: 57189026022\nGoogle Scholar: https://scholar.google.com/citations?user=sXVRJrQAAAAJ&hl=en\nh-index: 27 \ni10-index: 34",

    ongoingConsultingProjects: [],
    completedFundedProjects: [],
    booksPublished: [],

    specialization: ["Battery & Energy Storage", "Sodium Ion Batteries", "Zinc Ion Batteries", "Manganese Ion Batteries"],
    roleCategory: ["ASSOC_PROF", "PHD_SUPERVISOR", "BTECH"],
    scholarLink: "https://scholar.google.com/citations?user=sXVRJrQAAAAJ&hl=en"
  },

  {
    id: "fac-6",
    name: "Dr. Arjun Singh K",
    image: "./arjun.jpg",
    designation: "Assistant Professor Senior Grade 1",
    school: "Center for Net Zero Technologies",
    department: "Center for Net Zero Technologies",
    cabin: "Not Available",
    email: "arjunsingh.k@vit.ac.in",

    // Research Details (Area of Specialization)
    researchDetails: "Fuel Cells \nGreen Hydrogen Production and Storage \nSolar Energy \nConcentrated Solar Power \nHeat Transfer\nORCID: 0000-0003-1312-0522\nScopus: 57210982859\nGoogle Scholar: https://scholar.google.co.in/citations?user=jDRUx5YAAAAJ&hl=en\nh-index: 10 \ni10-index: 10",

    // Ongoing Consulting Project Details
    ongoingConsultingProjects: [
      {
        title: "Autonomous Drone for Inventory Management Phase-II",
        client: "Pedigri Technologies, United Arab Emirates",
        duration: "Ongoing",
        amount: "International Grant"
      }
    ],

    // Completed Consultancy Projects
    completedConsultancyProjects: [
      {
        title: "Autonomous RFID-Enabled Drone for Warehouse Inventory Management (Phase-I)",
        agency: "Pedigri Technologies, United Arab Emirates"
      }
    ],

    // Completed Funded Project Details
    completedFundedProjects: [
      {
        title: "Design and Development of Portable Solar Power Station",
        agency: "VIT SEED Grant",
        grantAmount: "Funded",
        completedYear: "Completed"
      }
    ],

    // Patents Granted Details
    patentsGranted: [
      { title: "Portable Solar Powered Medical Incinerator (Grant No: 389014-001)" },
      { title: "Modular Portable Solar Power Station (Grant No: 406099-001)" },
      { title: "Ergonomic Wearable Anesthesia Monitor for Patients (Grant No: 417922-001)" }
    ],

    booksPublished: [],

    specialization: ["Hydrogen & Fuel Cells", "Solar Energy", "Concentrated Solar Power", "Heat Transfer"],
    roleCategory: ["BTECH", "MTECH"],
    scholarLink: "https://scholar.google.co.in/citations?user=jDRUx5YAAAAJ&hl=en"
  },

  {
    id: "fac-7",
    name: "Dr. R Sasikumar",
    image: "./sasikumar.jpg",
    designation: "Assistant Professor Sr. Grade 1",
    school: "Center for Net Zero Technologies",
    department: "Center for Net Zero Technologies",
    cabin: "Not Available",
    email: "rc.sasikumar@vit.ac.in",

    // Research Details (Area of Specialization)
    researchDetails: "Sustainable Structural and Energy Composites \nEnergy Storage and Conversion Technologies \nEMI Shielding\nORCID: 0009-0003-8639-3772\nScopus: 50033314831\nGoogle Scholar: https://scholar.google.com/citations?user=9tQJzvsAAAAJ&hl=en\nh-index: 4 \ni10-index: 2",

    ongoingConsultingProjects: [],
    completedFundedProjects: [],
    booksPublished: [],

    specialization: ["Sustainable Structural & Energy Composites", "Battery & Energy Storage", "EMI Shielding"],
    roleCategory: ["BTECH"],
    scholarLink: "https://scholar.google.com/citations?user=9tQJzvsAAAAJ&hl=en"
  }
];
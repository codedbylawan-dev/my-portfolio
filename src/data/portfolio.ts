export const portfolioData = {
  profile: {
    name: "Lawan Goud",
    title: "Junior Full Stack Developer",
    tagline: "Turning logic into reliable web applications.",
    brandStatement:
      "Self-taught developer with strong foundations in JavaScript, Python, and SQL. Focused on building clean, practical, and scalable applications through continuous learning and real-world projects.",
    location: "India",
    email: "lawan@example.com", // Replace with real email
    github: "https://github.com/Lawangoud",
    linkedin: "https://linkedin.com/in/lawangoud"
  },

  timeline: [
    { year: "2024 - Present", title: "Intensive Full Stack Learning", description: "Specializing in MERN stack and Python backend development. Built 5+ real-world projects." },
    { year: "2023", title: "SQL & Database Mastery", description: "Mastered relational database design, complex queries, and data integrity principles." },
    { year: "2022", title: "The Journey Begins", description: "Started learning logic through Python and basic web structures (HTML/CSS)." }
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React (Basics)",
        "Responsive Design"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Python",
        "REST APIs",
        "File Handling"
      ]
    },
    {
      category: "Database",
      items: [
        "SQL",
        "SQLite",
        "Database Design",
        "ER Modeling",
        "Joins & Subqueries"
      ]
    },
    {
      category: "Tools",
      items: [
        "Git & GitHub",
        "Postman",
        "VS Code",
        "npm",
        "Command Line Basics"
      ]
    }
  ],

  projects: [
    {
      id: "learning-manager",
      title: "Personal Learning Manager",
      description:
        "A web application to organize study notes, track learning progress, and manage development roadmaps.",
      problem:
        "Learning materials were scattered across files, notebooks, and browsers.",
      solution:
        "Built a centralized dashboard with note storage, roadmap tracking, and progress monitoring.",
      techStack: [
        "JavaScript",
        "Node.js",
        "Express",
        "SQLite",
        "HTML",
        "CSS"
      ],
      tags: ["JavaScript", "Full Stack"],
      impact:
        "Improved consistency in learning and made technical revision more structured.",
      link: "#",
      github: "#"
    },

    {
      id: "inventory-tracker",
      title: "Inventory Tracking System",
      description:
        "A simple inventory management system for tracking items and generating reports.",
      problem:
        "Manual inventory records caused confusion and data inconsistency.",
      solution:
        "Developed a CRUD-based system with CSV import/export and history logs.",
      techStack: [
        "Node.js",
        "Express",
        "SQLite",
        "CSV Parser"
      ],
      tags: ["JavaScript", "Backend"],
      impact:
        "Reduced manual errors and improved data organization.",
      link: "#",
      github: "#"
    },

    {
      id: "employee-manager",
      title: "Employee Management System",
      description:
        "A database-driven application to manage employee records and roles.",
      problem:
        "Difficulty in maintaining structured employee data and relationships.",
      solution:
        "Designed relational tables and implemented role-based data handling.",
      techStack: [
        "Python",
        "SQL",
        "SQLite",
        "Database Design"
      ],
      tags: ["Python", "SQL"],
      impact:
        "Strengthened understanding of relational databases and data integrity.",
      link: "#",
      github: "#"
    }
  ],
  certifications: [
    {
      title: "Full Stack Web Development",
      provider: "Self-Paced Learning / Project Based",
      year: "2025",
      link: "#"
    },
    {
      title: "SQL & Relational Databases",
      provider: "Industry Recognized Path",
      year: "2024",
      link: "#"
    },
    {
      title: "Python for Engineering",
      provider: "Technical Academy",
      year: "2024",
      link: "#"
    }
  ]
};

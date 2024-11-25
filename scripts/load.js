const projects = [
  {
    name: "Syllabyte",
    image: "Pictures/syllabyte.png",
    link: "https://www.youtube.com/watch?v=2kAptDVbWks",
    from: new Date("2023-05-01"),
    to: new Date(),
  },
  {
    name: "GIS Mapping System",
    image: "Pictures/mapper.png",
    link: "https://github.com/HarshitSohaney/Mapper-65",
    from: new Date("2022-01-01"),
    to: new Date("2022-04-01"),
  },
  {
    name: "Moodlist - Mood Predictor",
    image: "Pictures/spotify.jpg",
    link: "https://github.com/maiseyperelonia/moodlist",
    from: new Date("2023-09-01"),
    to: new Date("2023-12-30"),
  },
  {
    name: "Block Stack Game",
    image: "Pictures/block.png",
    link: "https://github.com/HarshitSohaney/Block-Stack",
    from: new Date("2022-01-01"),
    to: new Date("2022-04-30"),
  },
  {
    name: "IDK Them",
    image: "Pictures/you_dont_know.png",
    link: "https://idk-them.vercel.app",
    from: new Date("2024-03-01"),
    to: new Date("2024-04-01"),
  },
  {
    name: "Boomerang - Lost & Found",
    image: "Pictures/boomerang.png",
    link: "https://github.com/HarshitSohaney/Boomerang-GDSC2021",
    from: new Date("2021-01-01"),
    to: new Date("2021-04-30"),
  },
  {
    name: "FINCH SD Card System",
    image: "Pictures/UTAT.png",
    link: "https://github.com/cam-rod/UTAT-spi-sd-test",
    from: new Date("2021-01-01"),
    to: new Date("2022-04-30"),
  },
  {
    name: "Fake News Detection AI",
    image: "Pictures/coursera.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/WXKW23UCFY4C",
    from: new Date("2020-01-01"),
    to: new Date("2020-02-30"),
  },
];

function generateProjectsHTML(type = "desktop", num_to_load = projects.length) {
  // make sure num_to_load is not greater than the number of projects
  if (num_to_load > projects.length) {
    num_to_load = projects.length;
  }

  // Sort projects by 'to' date (most recent first), then by 'from' date
  projects.sort((a, b) => {
    const aTo = a.to;
    const bTo = b.to;
    const aFrom = a.from;
    const bFrom = b.from;

    if (aTo > bTo) return -1;
    if (aTo < bTo) return 1;

    if (aFrom > bFrom) return -1;
    if (aFrom < bFrom) return 1;

    return 0;
  });

  let numCols = 3;
  if (type == "mobile") {
    numCols = 2;
  }
  let html = "<tbody>";
  for (let i = 0; i < num_to_load; i += numCols) {
    html += "<tr>";
    for (let j = i; j < i + numCols && j < projects.length; j++) {
      const project = projects[j];
      html += `
          <td>
            <a class="btn btn-secondary col-style-project img-container" href="${
              project.link
            }" rel="noopener" target="_blank">
              <div class="row gx-5">
                <div class="col-sm-3 col-img-project">
                  <img src="${project.image}" alt="${project.name}" height=${
        type == "mobile" ? "50px" : "70px"
      } width="${type == "mobile" ? "50px" : "70px"}"> ${
        type == "mobile" ? `${project.name}` : ""
      }
                </div>
                ${
                  type == "mobile"
                    ? ""
                    : `<div class="col-sm-9 my-auto">
                    <p>${project.name}</p>
                  </div>`
                }
                
              </div>
            </a>
          </td>
        `;
    }
    html += "</tr>";
  }
  html += "</tbody>";
  return html;
}

function loadProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = generateProjectsHTML();

  const mobile_container = document.getElementById("projects-container-mobile");
  mobile_container.innerHTML = generateProjectsHTML("mobile");
}

const experiences = [
  {
    logo: "Pictures/ff_logo.png",
    position: "Software Engineering Intern",
    company: "Mozilla Corp.",
    duration: "May, 2023 - Aug, 2024",
    details: [
      "Engineered a robust versioning architecture for Firefox's anti-tracking feature, thereby enabling the use of up-to-date protection lists on iOS, markedly improving privacy for 100% iOS Firefox users",
      "Implemented the browser standards spec for Storage Access API by upgrading the storage access scope from per page to per frame, strengthening cross-site security on Firefox and increasing alignment to other major web browsers",
      "Revamped the front-end and back-end architecture for Firefox's Clear Browsing Data feature using C++ and JavaScript, enhancing privacy and optimizing performance for 3 million+ daily users.",
      "Managed the Data Sanitization component on Bugzilla, handling verification and triage for 100+ bugs",
    ],
    links: [
      {
        text: "Storage Access API",
        url: "https://privacycg.github.io/storage-access/",
      },
      {
        text: "Fx128 Release Notes",
        url: "https://www.mozilla.org/en-US/firefox/128.0/releasenotes/",
      },
      {
        text: "Bugzilla Account",
        url: "https://bugzilla.mozilla.org/user_profile?user_id=726750",
      },
    ],
  },
  {
    logo: "Pictures/softchoice.png",
    position: "Application Development Intern",
    company: "Softchoice Corp.",
    duration: "May, 2022 - Aug, 2022",
    details: [
      "Improved the frontend and backend for Single Page Applications (SPA) on the company portal using .NET Core and MVC Framework to help users navigate items efficiently",
      "Optimized Keystone API logging tables with Object Relational Mapping (ORM) using LINQ to SQL queries to improve access time from 30 seconds to 2 seconds",
      "Implemented a planning interface by creating APIs to assist in determining development time and creating tasks",
      "Facilitated various co-op weekly meetings and introduced topics of interest to the presentation format, which lead to insightful discussions amongst team leadership and interns",
    ],
    links: [],
  },
  {
    logo: "Pictures/UOFT.png",
    position: "Teaching Assistant - Operating Systems",
    company: "University of Toronto",
    duration: "Sept, 2023 - Dec, 2023",
    details: [
      "Undergraduate Teaching Assistant for Operating Systems Fall 2023 (ECE344)",
      "Concepts covered: Multi-threading, Virtual Memory (Page Tables), UNIX System Calls, Linux Kernel",
    ],
    links: [],
  },
  {
    logo: "Pictures/UTMD.png",
    position: "Founder/Co-president",
    company: "University of Toronto Musical Design",
    duration: "May, 2023 - Sept, 2024",
    details: [
      "Started a design team which builds and designs musical instruments in the University of Toronto",
      "Leading an executive team of 6 with a total of 30 general members in engineering an Acoustic Electric guitar",
      "Maintaining relations with the Faculty of Applied Sciences, Faculty of Music, and reaching out to external companies for support",
    ],
    links: [],
  },
  {
    logo: "Pictures/UOFTAI.jpg",
    position: "ProjectX Director",
    company: "UofT AI",
    duration: "July, 2023 - Present",
    details: [
      "Directed Canada's largest AI research competition, with over $10,000 in prizes",
    ],
    links: [
      {
        text: "Link to ProjectX",
        url: "https://www.uoft.ai/projectx",
      },
    ],
  },
  {
    logo: "Pictures/UOFTAI.jpg",
    position: "Curriculum Content Lead",
    company: "UofT AI",
    duration: "June, 2022 - Dec, 2022",
    details: [
      "Lead a team of ten to design the curriculum for an introductory AI program (Learn AI) at UofT AI",
      "Introduced new lectures targetting real world applications of AI and the philosophy of AI for the future",
    ],
    links: [
      {
        text: "Link to Curriculum 2022-2023",
        url: "https://www.uoft.ai/_files/ugd/8f6d2f_62f7cf1a0e0c44859bd0a111282714ed.pdf",
      },
    ],
  },
  {
    logo: "Pictures/ICUBE.jpg",
    position: "Co-creator",
    company: "Air-Recharging",
    duration: "Mar, 2021 - Nov, 2021",
    details: [
      "Researched on a new rechargeable battery that makes use of the Earth's magnetic field to self-charge",
      "Accepted into the ICUBE LEAP Startup League to improve our business model and move further with the venture",
      "Obtained the second place prize at the ENACTUS UofT Innovation Pitch Competition",
    ],
    links: [
      {
        text: "Link to Curriculum 2022-2023",
        url: "https://www.uoft.ai/_files/ugd/8f6d2f_62f7cf1a0e0c44859bd0a111282714ed.pdf",
      },
    ],
  },
];

function generateExperienceHTML() {
  const experienceContainer = document.getElementById("myAccordion");
  console.log(experienceContainer);
  experiences.forEach((exp, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item search-tag";

    accordionItem.innerHTML = `
    <h2 class="accordion-header" id="heading${index}">
        <button type="button" class="accordion-button collapsed background-black" data-bs-toggle="collapse" data-bs-target="#collapse${index}">
            <div class="container">
                <div class="row align-items-center"> <!-- Flexbox for vertical alignment -->
                    <div class="col-1">
                        <img src="${
                          exp.logo
                        }" height="40px" width="40px" alt="${exp.company}">
                    </div>
                    <div class="col-4 text-green">
                        <p>${exp.position}</p>
                    </div>
                    <div class="col-4 text-muted">
                        <p>${exp.company}</p>
                    </div>
                    <div class="col-3 text-muted">
                        <p>${exp.duration}</p>
                    </div>
                </div>
            </div>
        </button>									
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
        <div class="card-body">
            <ul>
                ${exp.details.map((detail) => `<li>${detail}</li>`).join("")}
                ${
                  exp.links
                    ? exp.links
                        .map(
                          (link) =>
                            `<a href="${link.url}" rel="noopener" target="_blank">${link.text}</a>`
                        )
                        .join("<br>")
                    : ""
                }
            </ul> 
        </div>
    </div>
  `;

    experienceContainer.appendChild(accordionItem);
  });
}

function generateSkillsSection() {
  const programmingLanguages = [
    {
      img: "Pictures/C++.png",
      title: "C++ Programming",
      proficiency: "Proficient",
    },
    {
      img: "Pictures/C.png",
      title: "C Programming",
      proficiency: "Proficient",
    },
    { img: "Pictures/js.png", title: "JavaScript", proficiency: "Proficient" },
    { img: "Pictures/python.png", title: "Python", proficiency: "Proficient" },
    {
      img: "icons/postgres.png",
      title: "PostgreSQL",
      proficiency: "Proficient",
    },
    { img: "icons/rust.png", title: "Rust", proficiency: "Intermediate" },
    {
      img: "Pictures/Csharp.png",
      title: "C# Programming",
      proficiency: "Intermediate",
    },
  ];

  const developmentTools = [
    { img: "icons/git.png", title: "Git", proficiency: "Proficient" },
    {
      img: "icons/React-icon.svg.png",
      title: "ReactJS",
      proficiency: "Intermediate",
    },
    { img: "icons/django.png", title: "Django", proficiency: "Intermediate" },
    {
      img: "Pictures/netcore.png",
      title: ".NET Core",
      proficiency: "Intermediate",
    },
    { img: "icons/figma.png", title: "Figma", proficiency: "Intermediate" },
    {
      img: "Pictures/Pytorch_logo.png",
      title: "PyTorch",
      proficiency: "Intermediate",
    },
  ];

  // Populate Programming Languages
  const programmingRow = document.getElementById("skills-row");
  programmingLanguages.forEach((skill) => {
    programmingRow.innerHTML += createSkillCard(
      skill.img,
      skill.title,
      skill.proficiency
    );
  });

  // Populate Development Tools
  const toolsRow = document.getElementById("tools-row");
  developmentTools.forEach((tool) => {
    toolsRow.innerHTML += createSkillCard(
      tool.img,
      tool.title,
      tool.proficiency
    );
  });

  // Generate Proficiency Filters
  generateProficiencyFilters(programmingLanguages, "language-filters");
  generateProficiencyFilters(developmentTools, "tools-filters");

  // Add Filter Event Listeners
  addFilterEventListeners("language-filters", "skills-row");
  addFilterEventListeners("tools-filters", "tools-row");
}

function createSkillCard(imgSrc, title, proficiency) {
  return `
      <div class="col-sm skill-card" data-proficiency="${proficiency}">
          <div class="card">
              <div class="container-box">
                  <img src="${imgSrc}" class="card-img-top" alt="${title}" height="20px" width="20px">
              </div>
              <div class="card-body">
                  <h5 class="card-title fw-bold">${title}</h5>
                  <p class="card-text">${proficiency}</p>
              </div>
          </div>
      </div>
  `;
}

function generateProficiencyFilters(items, containerId) {
  const filterContainer = document.getElementById(containerId);
  const proficiencies = [...new Set(items.map((item) => item.proficiency))];

  proficiencies.forEach((proficiency) => {
    const filterBtn = document.createElement("button");
    filterBtn.classList.add("filter-badge");
    filterBtn.textContent = proficiency;
    filterBtn.dataset.filter = proficiency;
    filterContainer.appendChild(filterBtn);
  });
}

function addFilterEventListeners(filterContainerId, rowId) {
  const filterContainer = document.getElementById(filterContainerId);
  const row = document.getElementById(rowId);

  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-badge")) {
      const filter = e.target.dataset.filter;
      const filterBtns = filterContainer.querySelectorAll(".filter-badge");
      const skillCards = row.querySelectorAll(".skill-card");

      // Reset active state
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");

      // Filter skills
      skillCards.forEach((card) => {
        if (filter === "all" || card.dataset.proficiency === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  generateExperienceHTML();
  generateSkillsSection();
});

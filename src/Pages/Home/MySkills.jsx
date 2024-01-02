// MySkills.jsx
import React from "react";
import data from "../../data/index.json";

const codingLanguages = [
  // Foundational Web Technologies
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },

  // Frontend Frameworks/Libraries
  { name: "React" },
  { name: "Bootstrap" },
  { name: "Tailwind CSS" },

  // Programming Languages
  { name: "Python" },
  { name: "JavaScript" },
  { name: "Java" },
  { name: "C" },
  { name: "C++" },
  { name: "Haskell" },
  { name: "TypeScript" },

  // Version Control
  { name: "Git" },

  // Databases
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Couchbase" },

  // Backend Frameworks
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Flask" },

  // Integrated Development Environments (IDEs)
  { name: "Visual Studio Code" },
  { name: "Eclipse" },

  // Other Technologies
  { name: "Linux" },
];

export default function MySkills() {
  return (
    <>
      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          <p className="section--title">My Skills</p>
          <h2 className="skills--section--heading">My Expertise</h2>
        </div>
        <div className="skills--section--container">
          {data?.skills?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="languages">
          <h3 className="languages--heading">Technologies</h3>
          <div className="skills">
            {codingLanguages.map((language, index) => (
              <div key={index} className="skills__skill">
                {language.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState, useEffect } from "react"; // Import useEffect

import data from "../../data/index.json";

export default function MyPortfolio() {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const portfolioChunks = chunkArray(data.portfolio, 3);

  // Use useEffect to manage the overflow hidden state
  useEffect(() => {
    document.body.style.overflow = isOverflowHidden ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, [isOverflowHidden]);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* Subtitle for the portfolio section */}
          <p className="sub--title">Recent Projects</p>
          {/* Main heading for the portfolio section */}
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a
            href="https://github.com/NicholasIliev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            {/* GitHub link with an SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 98 93"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f"
              />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>

      <div className="portfolio-section">
        {portfolioChunks.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((project) => (
              <div key={project.id} className="grid-item">
                {project.type === "image" ? (
                  <img src={project.src} alt={project.title} />
                ) : (
                  <div className="portfolio--video">
                    <iframe
                      title={project.title}
                      width="100%"
                      height="100%"
                      src={`${project.youtube}?autoplay=1&vq=hd1080&hd=1`}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm portfolio--link"
                  onClick={() => setIsOverflowHidden(!isOverflowHidden)}
                >
                  {project.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

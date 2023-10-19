import data from "../../data/index.json";

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
                                <p className="skills--section--description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Separate Containers for Embedded YouTube Videos
            <div className="youtube-video">
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/D0UnqGm_miA?si=7xu2vCCnFVR40dv1"
                        title="Embedded YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/D0UnqGm_miA?si=7xu2vCCnFVR40dv1"
                        title="Embedded YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/D0UnqGm_miA?si=7xu2vCCnFVR40dv1"
                        title="Embedded YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div> */}
        </>
    );
}

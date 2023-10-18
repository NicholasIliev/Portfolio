import data from "../../data/index.json";

export default function MySkills() {
    return (
        // Skills section container with an ID for linking
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                {/* Section title */}
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            {/* Image representing a skill or expertise */}
                            <img src={item.src} alt="Product Chain" />
                        </div>
                        <div className="skills--section--card--content">
                            {/* Skill title */}
                            <h3 className="skills--section--title">{item.title}</h3>
                            {/* Skill description */}
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function HeroSection() {
    return (
        // Hero Section container with an ID for linking
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    {/* Section title */}
                    <p className="section--title">Hey I'm Nicholas</p>
                    <h1 className="hero--section--title">
                        {/* Highlighted text within the title */}
                        <span className="hero--section--title--highlight">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    {/* Description of the Hero Section */}
                    <p className="hero--section-description">
                        I'm a 2nd Year Computer Science Student at the University of Manchester.
                        <br /> I'm passionate about building applications and learning new technologies.
                    </p>
                </div>
                {/* Button for getting in touch */}
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                {/* Image in the Hero Section */}
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}

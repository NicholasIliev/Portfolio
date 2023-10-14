export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey I'm Nicholas</p>
                    <h1 className="hero--section--title"><span className="hero--section--title--highlight">Full Stack</span>{" "}
                    <br />
                    Developer
                    </h1>
                    <p className="hero--section-description">
                        I'm a 2nd Year Computer Science Student at the University of manchester.
                        <br /> I'm passionate about building applications and learning new technologies.
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}
// import FadeIn from "react-fade-in";

export default function HeroSection() {
  return (
    // Hero Section container with an ID for linking
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          {/* <FadeIn transitionDuration={2000}> */}
            {/* Section title */}
            <p className="section--title">Hey I'm Nicholas</p>
            <br />
            <h1 className="hero--section--title">
              {/* Highlighted text within the title */}
              <span className="hero--section--title--highlight">
                Software
              </span>{" "}
              <br />
              Engineer
            </h1>
            {/* Description of the Hero Section */}
            <p className="hero--section--description">
              <br />
              I'm a 2nd Year Computer Science Student at the University of
              Manchester.
              <br /> I'm passionate about building applications and learning new
              technologies.
            </p>
          {/* </FadeIn> */}
        </div>
        {/* Link for downloading CV */}
        {/* <FadeIn transitionDuration={2000}> */}
          <a
            href={process.env.PUBLIC_URL + "./CVNicholasIliev.pdf"}
            className="btn btn-primary"
            download
          >
            Download CV
          </a>
        {/* </FadeIn> */}
      </div>
      {/* <FadeIn transitionDuration={2000}> */}
        <div className="hero--section--img">
          {/* Image in the Hero Section */}
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      {/* </FadeIn> */}
    </section>
  );
}

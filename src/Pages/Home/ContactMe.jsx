export default function ContactMe() {
    const emailLink = "mailto:nicholas.iliev.2003@gmail.com";
    const linkedInLink = "https://www.linkedin.com/in/nicholas-iliev-456129262/";

    return (
        <section id="Contact" className='contact--section'>
            <div className="section__text__p1">Get in Touch</div>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src="./img/email.png"
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                        onClick={() => window.open("mailto:nicholas.iliev.2003@gmail.com ", "_blank")}
                    />
                    <p><a href={emailLink} target="_blank" rel="noopener noreferrer" className='contact-info-link'>Email</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                        src="./img/linkedin.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon email-icon"
                        onClick={() => window.open("https://www.linkedin.com/in/nicholas-iliev-456129262/", "_blank")}
                    />
                    <p><a href={linkedInLink} target="_blank" rel="noopener noreferrer" className='contact-info-link'>LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
}
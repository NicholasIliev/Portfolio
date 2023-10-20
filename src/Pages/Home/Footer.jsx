import React from "react";

function Footer() {
    return (
        <footer className="footer--container">
        <div className="footer--link--container">
            <div>
            <img src="./img/logo.svg" alt="Logoipsum" />
            </div>
        </div>
        <hr className="divider" />
        <div className="footer--content--container">
            <p className="footer--content">© Copyright 2023. Made by Nicholas Iliev</p>
            <div className="footer--social--icon">
            </div>
        </div>
    </footer>
    );
}

export default Footer;

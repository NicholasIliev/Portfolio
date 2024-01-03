import React from "react";
import { Helmet } from "react-helmet";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
// import MouseCircle from "../MouseCircle";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nicholas Iliev - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Nicholas Iliev, a passionate software engineer showcasing projects and achievements."
        />

        {/* OG tags for social media sharing */}
        <meta
          property="og:title"
          content="Nicholas Iliev - Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Nicholas Iliev, a software engineer passionate about web development and programming."
        />
        <meta property="og:url" content="https://www.nicholasiliev.com" />
        <meta property="og:type" content="website" />

        {/* Additional Meta Tags */}
        <meta
          name="keywords"
          content="software engineer, web development, programming, portfolio, projects, nicholas iliev, nicholas, iliev, nicholasiliev, nicholasiliev.com, nicholasiliev"
        />
        <meta name="author" content="Nicholas Iliev" />

        {/* GitHub Profile Meta Tag */}
        <meta name="github" content="https://github.com/NicholasIliev" />

        {/* LinkedIn Profile Meta Tag */}
        <meta
          name="linkedin"
          content="https://www.linkedin.com/in/nicholasiliev/"
        />

        {/* Add other meta tags as needed */}
      </Helmet>

      {/* <MouseCircle /> */}
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}

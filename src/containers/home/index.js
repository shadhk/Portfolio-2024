import React from "react"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { Animate } from "react-simple-animate"
import "./style.scss"

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Shad.
          <br />
          Front End Developer
        </h1>
      </div>
      <Animate play duration={1.5} delay={1} start={{ transform: "translateY(600px)" }} end={{ transform: "translateX(0px)" }}>
        <div className="contact-me">
          <div className=" contact-me__buttons-wrapper">
            <button>Hire Me</button>
            <a href="/">Download Resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaLinkedin size={32} />
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagram size={32} />
          </div>
        </div>
      </Animate>
    </section>
  )
}

export default Home

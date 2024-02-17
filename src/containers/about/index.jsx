import React from "react"
import PageHeaderContent from "../../components/pageHeaderContent"
import { BsInfoCircleFill } from "react-icons/bs"
import { DiApple, DiAndroid } from "react-icons/di"
import { FaDev, FaDatabase } from "react-icons/fa"
import { Animate } from "react-simple-animate"
import "./style.scss"

const personalDetails = [
  {
    label: "Name",
    value: "Shad Khan"
  },
  {
    label: "Age",
    value: "28"
  },
  {
    label: "Address",
    value: "India"
  },
  {
    label: "Email",
    value: "shadhussaink@gmail.com"
  },
  {
    label: "Contact No",
    value: "+91-76693-70538"
  }
]

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent headerText="About me" icon={<BsInfoCircleFill size={40} />} />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <h3 className="developerContent">Front End Developer</h3>
            <p>Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you'll be judged by your ability to use UX and UI concepts and follow design guidelines. It's about expressing your attention to detail and how you can help implement design ideas for your future employer.</p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalDetails.map(item => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="var(--selected-theme-main-color" size={60} />
              </div>
              <div>
                <FaDev color="var(--selected-theme-main-color" size={60} />
              </div>
              <div>
                <FaDatabase color="var(--selected-theme-main-color" size={60} />
              </div>
              <div>
                <DiAndroid color="var(--selected-theme-main-color" size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About

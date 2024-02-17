import { Routes, Route, useLocation } from "react-router-dom"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import particlesConfig from "./helpers/particlesConfig"
import Home from "./containers/home"
import About from "./containers/about"
import Skills from "./containers/skills"
import Resume from "./containers/resume"
import Portfolio from "./containers/portfolio"
import Contact from "./containers/contact"
import "./App.scss"
import NavBar from "./components/navBar"
import { useEffect, useState } from "react"
import Theme from "./components/theme"

function App() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    if (init) {
      return
    }
    initParticlesEngine(async engine => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [init])

  const location = useLocation()
  const showParticles = location.pathname === "/"

  return (
    <div className="App">
      {init && showParticles && <Particles options={particlesConfig} />}
      <div className="App__navbar-wrapper">
        <NavBar />
      </div>
      <div className="App__main-content">
        <Theme />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

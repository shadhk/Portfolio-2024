import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaReact, FaBars } from "react-icons/fa"
import { HiX } from "react-icons/hi"
import { navMenus } from "./config"
import "./style.scss"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggleButton = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          <ul className={toggle ? "navbar__container__menu active" : "navbar__container__menu"}>
            {navMenus.map((item, index) => (
              <li key={index} className="navbar__container__menu__item">
                <Link to={item.to} className="navbar__container__menu__item__links">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleToggleButton}>
            {toggle ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

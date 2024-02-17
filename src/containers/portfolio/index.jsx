import React, { useState } from "react"
import PageHeaderContent from "../../components/pageHeaderContent"
import { AiFillProject } from "react-icons/ai"
import { portfolioData, filteroptions } from "./utils"
import "./style.scss"

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [filterValue, setFilterValue] = useState(1)

  const updatedPortFolioData = filterValue === 1 ? portfolioData : portfolioData.filter(item => item.sectionId === filterValue)

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent headerText="My Portfolio" icon={<AiFillProject size={40} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filteroptions.map(option => (
            <li className={option.id === filterValue && "active"} onClick={() => setFilterValue(option.id)} key={option.id}>
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {updatedPortFolioData.map((item, index) => (
            <div onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="portfolio__content__cards__item">
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.projectLink}>
                  <img src={item.image} alt={item.projectName} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

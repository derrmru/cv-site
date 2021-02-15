import React, { useEffect, useState } from "react"
import Body from "../templates/Body/Body"
import SEO from "../components/SEO/SEO"
import Headline from "../components/Headline/Headline"
import DownwardArrow from "../components/Icons/DownwardArrow/DownwardArrow"
import Experiences from "../components/Experiences/Experiences"
import SideProjects from "../components/SideProjects/SideProjects"
import ContactForm from "../components/ContactForm/ContactForm"
import './index.css'

export default function Home() {
  const [language, setLanguage] = useState('English')
  const [year, setYear] = useState(new Date().getFullYear().toString())

  useEffect(() => {
    const userLang = window.navigator.language || window.navigator.userLanguage; 
    (userLang === 'fr' || userLang === 'fr-fr') ? setLanguage('French') : setLanguage('English')
  }, [language])

  return (
    <div className="homepage"> 
      <Body language={language}>
        <SEO title={language === 'French' ? "Accueil" : "Home"} />
        
        <div className="huge-title">
          <Headline language={language} />
          <DownwardArrow linkTo='#section-2' />
        </div>

        <div id="section-2" className="section-2-container">
          <div className="section-2">
            <div className="left-section">
            <div
              className="year-selector"
              >
              <button
                className="year-select-button"
                onClick={() => setYear('2021')}
                >
                  2021
              </button>
              <button
                className="year-select-button"
                onClick={() => setYear('2020')}
                >
                  2020
              </button>
            </div>
            <Experiences 
              language={language}
              year={year}
              />
            <SideProjects 
              language={language}
              year={year}
              />

            </div>
            <div className="right-section">
              <h3>{language === 'French' ? "Compétences" : "Expertise"}</h3>
              <h4>React JS</h4>
              <h4>Single Page Applications</h4>
              <h4>Progressive Web App</h4>
              <h4>Google Technologies</h4>

              <h3>{language === 'French' ? 'Bibliothèques' : 'Libraries / Frameworks / Platforms'}</h3>
              <h4>Javascript</h4>
              <h4>React JS</h4>
              <h4>Tyescript</h4>
              <h4>Gatsby</h4>
              <h4>GraphQL</h4>
              <h4>Mongo DB</h4>
              <h4>Mongoose</h4>
              <h4>Express JS</h4>
              <h4>D3 JS</h4>
              <h4>ServiceNow</h4>

              <h3>{language === 'French' ? 'Contact' : 'Get in touch'}</h3>
              <ContactForm language={language} contactName="contact-home" />
            </div>
          </div>
        </div>

      </Body>

    </div>
  )
}

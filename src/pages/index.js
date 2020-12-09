import React, { useEffect, useState } from "react"
import Body from "../templates/Body/Body"
import SEO from "../components/SEO/SEO"
import Headline from "../components/Headline/Headline"
import DownwardArrow from "../components/Icons/DownwardArrow/DownwardArrow"
import Experience from "../components/Experience/Experience"
import SideProject from "../components/SideProject/SideProject"
import ContactForm from "../components/ContactForm/ContactForm"
import './index.css'

export default function Home() {
  const [language, setLanguage] = useState('English')

  useEffect(() => {
    const userLang = window.navigator.language || window.navigator.userLanguage; 
    (userLang === 'fr' || userLang === 'fr-fr') ? setLanguage('French') : setLanguage('English')
  })

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
              <h3>{language === 'French' ? "Expérience" : "Experience"}</h3>

              <Experience 
                language={language}
                title='You Wear It Best'
                projectLink="https://you-wear-it-best.netlify.app/"
                client="You Wear It Best"
                clientLink="https://you-wear-it-best.netlify.app/about"
                date={language === 'French' ? "Août 2020" : "August 2020"}
                specialisms={['reactjs', 'gatsbyjs', 'netlifycms']}
                repository="https://github.com/derrmru/you-wear-it-best"
                />

              <Experience 
                language={language}
                title='Diagnostic Tool'
                projectLink="https://conditions.londonfootandanklesurgery.co.uk/"
                client="London Foot & Ankle Surgery"
                clientLink="https://www.londonfootandanklesurgery.co.uk/"
                date={language === 'French' ? "Juillet 2020" : "July 2020"}
                specialisms={['reactjs', 'google web apps', 'google apps script', 'Progressive Web App']}
                repository="https://github.com/derrmru/LFAS-Diagnosis-Tool"
                />

              <Experience 
                language={language}
                title='Client Registration Form'
                projectLink="https://registration.londonfootandanklesurgery.co.uk/"
                client="London Foot & Ankle Surgery"
                clientLink="https://www.londonfootandanklesurgery.co.uk/"
                date={language === 'French' ? "Mai 2020" : "May 2020"}
                specialisms={['reactjs', 'google web apps', 'google apps script']}
                repository="https://github.com/derrmru/Podogo-Registration-Form"
                />

              
              <Experience 
                language={language}
                title='Book a Virtual Appointment'
                projectLink="https://appointments.londonfootandanklesurgery.co.uk/"
                client="London Foot & Ankle Surgery"
                clientLink="https://www.londonfootandanklesurgery.co.uk/"
                date={language === 'French' ? "Mars 2020" : "March 2020"}
                specialisms={['reactjs', 'google web apps', 'google apps script']}
                repository="https://github.com/derrmru/LFAS-Virtual-Consultations"
                />

              <h3>Side Projects</h3>

              <SideProject 
                language={language}
                title='Mine The News (proof of concept)'
                projectLink="https://minethenews.com/"
                date={language === 'French' ? "Septembre 2020" : "September 2020"}
                specialisms={['reactjs', 'typescript', 'hookrouter', 'netlify', 'NLP']}
                repository="https://github.com/derrmru/whats-in-the-news"
                description="Set of statistical tools to visualise patterns in global News"
                />

              <SideProject 
                language={language}
                title='Scrape The News (proof of concept)'
                projectLink="https://words-news-scraper.herokuapp.com/"
                date={language === 'French' ? "Septembre 2020" : "September 2020"}
                specialisms={['expressjs', 'heroku', 'NLP', 'puppeteer', 'nodejs']}
                repository="https://github.com/derrmru/scrape-the-news"
                description="Server-side scraper, mining data daily from the global news. ExpressJS API."
                />

              <SideProject 
                language={language}
                title='Tip Splitter'
                projectLink="https://splitmytips.com/"
                date={language === 'French' ? "Août 2020" : "August 2020"}
                specialisms={['reactjs', 'typescript', 'Progressive Web App', 'hookrouter', 'netlify']}
                repository="https://github.com/derrmru/calculate-tips"
                description="Progessive Web App - tool for hospitality managers to split the tip pool amongst staff"
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

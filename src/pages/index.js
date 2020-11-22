import React from "react"
import Body from "../templates/Body/Body"
import SEO from "../components/SEO/SEO"
import Headline from "../components/Headline/Headline"
import DownwardArrow from "../components/Icons/DownwardArrow/DownwardArrow"
import Experience from "../components/Experience/Experience"
import SideProject from "../components/SideProject/SideProject"
import ContactForm from "../components/ContactForm/ContactForm"
import './index.css'

export default function Home() {
  return (
    <div className="homepage"> 
      <Body>
        <SEO title="Home" />
        
        <div className="huge-title">
          <Headline />
          <DownwardArrow linkTo='#section-2' />
        </div>

        <div id="section-2" className="section-2-container">
          <div className="section-2">
            <div className="left-section">
              <h3>Experience</h3>

              <Experience 
                title='You Wear It Best'
                projectLink="https://you-wear-it-best.netlify.app/"
                client="You Wear It Best"
                clientLink="https://you-wear-it-best.netlify.app/about"
                date="August 2020"
                specialisms={['reactjs', 'gatsbyjs', 'netlifycms']}
                repository="https://github.com/derrmru/you-wear-it-best"
                />

              <Experience 
                title='Diagnostic Tool'
                projectLink="https://conditions.londonfootandanklesurgery.co.uk/"
                client="London Foot & Ankle Surgery"
                clientLink="https://www.londonfootandanklesurgery.co.uk/"
                date="July 2020"
                specialisms={['reactjs', 'google web apps', 'google apps script', 'Progressive Web App']}
                repository="https://github.com/derrmru/LFAS-Diagnosis-Tool"
                />

              <Experience 
                title='Client Registration Form'
                projectLink="https://registration.londonfootandanklesurgery.co.uk/"
                client="London Foot & Ankle Surgery"
                clientLink="https://www.londonfootandanklesurgery.co.uk/"
                date="May 2020"
                specialisms={['reactjs', 'google web apps', 'google apps script']}
                repository="https://github.com/derrmru/Podogo-Registration-Form"
                />

              
              <Experience 
                title='Book a Virtual Appointment'
                projectLink="https://appointments.londonfootandanklesurgery.co.uk/"
                client="London Foot & Ankle Surgery"
                clientLink="https://www.londonfootandanklesurgery.co.uk/"
                date="March 2020"
                specialisms={['reactjs', 'google web apps', 'google apps script']}
                repository="https://github.com/derrmru/LFAS-Virtual-Consultations"
                />

              <h3>Side Projects</h3>

              <SideProject 
                title='Mine The News (proof of concept)'
                projectLink="https://minethenews.com/"
                date="September 2020"
                specialisms={['reactjs', 'typescript', 'hookrouter', 'netlify', 'NLP']}
                repository="https://github.com/derrmru/whats-in-the-news"
                description="Set of statistical tools to visualise patterns in global News"
                />

              <SideProject 
                title='Scrape The News (proof of concept)'
                projectLink="https://words-news-scraper.herokuapp.com/"
                date="September 2020"
                specialisms={['expressjs', 'heroku', 'NLP', 'puppeteer', 'nodejs']}
                repository="https://github.com/derrmru/scrape-the-news"
                description="Server-side scraper, mining data daily from the global news. ExpressJS API."
                />

              <SideProject 
                title='Tip Splitter'
                projectLink="https://splitmytips.com/"
                date="August 2020"
                specialisms={['reactjs', 'typescript', 'Progressive Web App', 'hookrouter', 'netlify']}
                repository="https://github.com/derrmru/calculate-tips"
                description="Progessive Web App - tool for hospitality managers to split the tip pool amongst staff"
                />

            </div>
            <div className="right-section">
              <h3>Expertise</h3>
              <h4>React JS</h4>
              <h4>Single Page Applications</h4>
              <h4>Progressive Web App</h4>
              <h4>Google Technologies</h4>

              <h3>Libraries / Frameworks / Platforms</h3>
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

              <h3>Get In Touch</h3>
              <ContactForm contactName="contact-home" />
            </div>
          </div>
        </div>

      </Body>

    </div>
  )
}

import React, { useEffect, useState } from "react"
import designImage from '../images/Laptop.svg'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Body from "../templates/Body/Body"
import Seo from "../components/Seo/Seo"
import MatrixHeader from "../components/MatrixHeader/MatrixHeader"
import Decypher from '../components/Decypher/Decypher'
import DownwardArrow from "../components/Icons/DownwardArrow/DownwardArrow"
import PointerDown from '../components/Icons/PointerDown/PointerDown'
import Card from "../components/Card/Card"
import ContactForm from "../components/ContactForm/ContactForm"
import './index.css'

export default function Home() {
  const [language, setLanguage] = useState('English')

  useEffect(() => {
    const userLang = window.navigator.language || window.navigator.userLanguage;
    (userLang === 'fr' || userLang === 'fr-fr') ? setLanguage('French') : setLanguage('English')
  }, [language])

  //query 3 most recent portfolio items
  const data = useStaticQuery(graphql`
        query porfolioQuery {
          allMarkdownRemark(filter: {frontmatter: {type: {eq: "experience"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  date
                  type
                  description
                  specialisms
                  slug
                  period
                }
              }
            }
          }
        }
    `)
  const projects = data.allMarkdownRemark.edges;

  return (
    <div className="homepage">
      <Body language={language}>
        <Seo 
          title={language === 'French' ? "Accueil" : "Home"} 
          description="Full Stack Developer, specialising in modern web libraries and frameworks. I create and develop applications, websites and interfaces for businesses, brands and individuals. Active in all stages of the build process from inception to production."
          schema={{
            '@type': 'Person', 
            'email': 'peter@thepetersweeney.com',
            'image': 'https://thepetersweeney.com/static/e012596220d803e42cc1e97e5f660fc0/ae1c8/profile.png',
            'jobTitle': 'Full Stack Developer',
            'name': 'Peter Sweeney',
            'additionalName': 'Joshua',
            "relevantOccupation": {
              "@type": "Occupation",
              "name": "Full Stack Developer",
              "occupationalCategory": {
                       "@type": "CategoryCode",
                       "inCodeSet": {
                            "@type": "CategoryCodeSet",
                            "name": "O*Net-SOC",
                            "dateModified": "2021",
                            "url": "https://www.onetonline.org/"
                         },
                       "codeValue": "15-1254.00",
                       "name": "Web Developers, Applications",
                       "url": "https://www.onetonline.org/link/summary/15-1254.00"
                   }
            },
            'url': 'https://thepetersweeney.com'
          }}
          />

        <div className="huge-title">
          <MatrixHeader 
            language={language} 
            words={['Web', 'React', 'Next', 'Gatsby', 'PWA', 'Javascript', 'Nomad', 'Front End', 'Full Stack']}
            />
          <DownwardArrow delay="6s" linkTo='#section-2' />
        </div>

        <div id="section-2" className="section-2-container">
          <div className="section-2">
            <div className="section-2-image">
              <div className="yellow-dot"></div>
              <div className="red-dot"></div>
              <img className="computer-image" width="250" height="200" src={designImage} alt="creative computing icon" />
            </div>
            <div className="section-2-writeup">
              <div className="section-2-text">
                <h2>What I Do</h2>
                <p>I create innovative digital solutions, interactive productivity applications, websites & interfaces for businesses, brands and individuals.</p>
                <p>At the intersection of precision technology and creative artistry, I design, develop & build efficient and scalable IT and pixel-perfect brand representation.</p>
                <h3>Services</h3>
                <ul>
                  <li><Decypher words={['UI - Wireframing & Prototyping']} /></li>
                  <li><Decypher words={['UX / Front End Development']} /></li>
                  <li><Decypher words={['Full Stack Development']} /></li>
                  <li><Decypher words={['Bespoke Productivity Apps']} /></li>
                </ul>
                <div className="find-out-more">
                  <Link to="/about">Find Out More</Link>
                </div>
              </div>
            </div>
          </div>
          <PointerDown />
        </div>

        <div id="section-3" className="homepage-section-3">
          <div className="homepage-3-container">
            <h3 className="port-title">My Work</h3>
            <h4>A Brief Selection Of Recent Work</h4>
            <div className="portfolio-card-container">
              {
                projects
                .sort((a, b) => new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date))
                .filter((project, idx) => idx < 3)
                .map((project, i) => {
                  const front = project.node.frontmatter;
                  return <Card 
                    key={'port-item' + i} 
                    title={front.title}
                    link={front.slug}
                    description={front.description}
                    language={language}
                    period={front.period}
                    specialisms={front.specialisms}
                    />
                })
              }
            </div>
            <div className="smp-link">
              <Link to="/projects"><h3>Go To Portfolio</h3></Link>
            </div>
          </div>
        </div>

        <div className='homepage-contact-container'>
          <div className="home-contact-content">
            <div className="home-contact-writing">
              <div className="home-new-business">
                <div className="contact-start">
                  <h3 className="contact-title">Get In Touch</h3>
                  <h4>Currently accepting new business!</h4>
                  <p>Drop me an email or schedule a call to discuss your project.</p>
                  <Link style={{textDecoration: 'none'}} to="/schedule">+ Schedule a Call</Link>
                </div>
                <div>
                  <a style={{textDecoration: 'none'}} href="mailto:peter@thepetersweeney.com"> + peter@thepetersweeney.com</a>
                  <br />
                  <br />
                  <a style={{textDecoration: 'none'}} href="tel:+33787207034"> + France: +33 7 87 20 70 34</a>
                  <br />
                  <br />
                  <a style={{textDecoration: 'none'}} href="tel:+447593084393"> + UK: +44 7593 084 393</a>
                </div>
              </div>
            </div>
            <div className='home-contact'>
              <ContactForm language={language} contactName="contact-home" />
            </div>
          </div>
        </div>

      </Body>

    </div>
  )
}

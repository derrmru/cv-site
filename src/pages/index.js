import React, { useEffect, useState } from "react"
import designImage from '../images/Laptop.svg'
import { Link, useStaticQuery } from 'gatsby'
import Body from "../templates/Body/Body"
import SEO from "../components/SEO/SEO"
import MatrixHeader from "../components/MatrixHeader/MatrixHeader"
import DownwardArrow from "../components/Icons/DownwardArrow/DownwardArrow"
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
          allMarkdownRemark(filter: {frontmatter: {type: {eq: "experience"}}}, limit: 3) {
            edges {
              node {
                frontmatter {
                  title
                  date
                  description
                  specialisms
                  projectLink
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
        <SEO title={language === 'French' ? "Accueil" : "Home"} />

        <div className="huge-title">
          <MatrixHeader 
            language={language} 
            words={['Web', 'Software', 'React', 'Nomad', 'PWA', 'Javascript', 'Full Stack']}
            />
          <DownwardArrow linkTo='#section-2' />
        </div>

        <div id="section-2" className="section-2-container">
          <div className="section-2">
            <div className="section-2-image">
              <img src={designImage} alt="creative computing icon" width="100%" />
            </div>
            <div className="section-2-writeup">
              <div className="section-2-text">
                <h3>ABOUT</h3>
                <p>I create smart technology solutions, interactive productivity applications & interfaces for brands, businesses and people.</p>
                <p>At the intersection of precision technology and creative artistry, I design & build efficient and scalable IT, as well as pixel-perfect brand representation with critical interaction points that your entire business can depend upon.</p>
                <h3>Services</h3>
                <ul>
                  <li>UX & BRAND STRATEGY</li>
                  <li>INTERFACE DESIGN & PROTOTYPING</li>
                  <li>E-COMMERCE ARCHITECTURE</li>
                  <li>PLATFORM ADDONS & PWA</li>
                </ul>
                <div className="find-out-more">
                  <Link to="/about">Find Out More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section-3" className="homepage-section-3">
          <div className="homepage-3-container">
            <h3 className="port-title">My Work</h3>
            <h4>A Brief Selection Of Recent Work</h4>
            <div className="portfolio-card-container">
              {
                projects.map((project, i) => {
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
              <Link to="/projects"><h3>See More Projects</h3></Link>
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

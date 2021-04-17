import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Body from "../templates/Body/Body"
import SEO from '../components/SEO/SEO'
import DownWardArrow from "../components/Icons/DownwardArrow/DownwardArrow"
import Decypher from '../components/Decypher/Decypher'
import './about.css'

const About = () => {
    const profileImage = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "profile.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
    }
  `)

    return (
        <Body>
            <SEO 
                title="About" 
                description="Headlines: Europe-based remote worker. Full stack web development. Clean, responsive & mobile-first web design. Well documented projects."
                />

            <div className="about-background">
                <div className="about-text-1">
                    <div className="about-title">
                        <h1><Decypher words={['About My Work']} /></h1>

                        <a href={require('../downloads/cv.pdf')} download>
                            <button
                                className="about-buttons"
                                >
                                    Download CV
                            </button>
                        </a>

                    </div>
                    <DownWardArrow delay=".5s" linkTo="#trans-section" />
                </div>

                <div id="trans-section" className="transparent-section">
                    <div className="trans-text-container">
                        <div className="trans-text">
                            <h2>About Me</h2>
                            <div className="profile-container">
                                <div className="profile-image">
                                    <div>
                                        <Img fluid={profileImage.file.childImageSharp.fluid} />
                                    </div>
                                </div>
                                <div className="profile-description">
                                    <h3>Headlines</h3>
                                    <ul>
                                        <li>Europe-based full stack developer - (GMT+1).</li>
                                        <li>Freelance technology solutions.</li>
                                        <li>Clean & responsive code.</li>
                                        <li>Well documented projects.</li>
                                    </ul>
                                    <p>I have a passion for building and developing modern, detailed, innovative and experimental web applications or software.</p>
                                    <p>I have worked with and led large diverse teams on a range of development projects using the latest technologies.</p>
                                    <p>I am employed fulltime on a remote basis, but am open to one-off projects and freelance work.</p>
                                    <h3>Personal</h3>
                                    <p>I grew up in London but in recent years have adopted the 'nomad' lifestyle (I am currently to be found haunting France).</p>
                                    <h3>Stack</h3>
                                    <p><strong>Front End:</strong></p>
                                    <ul>
                                        <li>Languages: Javascript, Typescript, HTML, CSS, Ruby</li>
                                        <li>Libraries: React JS, JQuery, D3 JS</li>
                                        <li>Frameworks: Gatsby JS, Next JS, Rails</li>
                                        <li>CMS: Netlify, Contentful, Wordpress</li>
                                        <li>Queries: GraphQL, REST</li>
                                    </ul>
                                    <p><strong>Database:</strong> Mongo DB, Mongoose, sqlite</p>
                                    <p><strong>Server:</strong> Node JS, Express JS, PHP</p>
                                    <p><strong>Cloud:</strong></p>
                                    <ul>
                                        <li>Languages: Google Apps Script</li>
                                        <li>Services: Google Workspace, Google Cloud Services, ServiceNow</li>
                                    </ul>
                                    <h3>Contact</h3>
                                    <p>Don't be shy. Get in touch!</p>
                                    <div className="buttons-container">
                                        <Link to="/contact"><button className="about-buttons">Contact Info</button></Link>
                                        <a href="mailto:peter@thepetersweeney.com"><button className="about-buttons">Send Email</button></a>
                                        <Link to="/schedule"><button className="about-buttons">Schedule a Call</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Body>
    )
}

export default About
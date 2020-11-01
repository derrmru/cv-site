import React from 'react'
import { Link } from 'gatsby'
import Body from "../templates/Body/Body"
import SEO from '../components/SEO/SEO'
import DownWardArrow from "../components/Icons/DownwardArrow/DownwardArrow"
import CV from '../downloads/cv.pdf'
import './about.css'

const About = () => {
    return (
        <Body>
            <SEO title="About" />

            <div className="about-background">
                <div className="about-text-1">
                    <div className="about-title">
                        <h1>About My Work</h1>

                        <a href={CV} download>
                            <button
                                className="about-buttons"
                                >
                                    Download CV
                            </button>
                        </a>

                    </div>
                    <DownWardArrow linkTo="#trans-section" />
                </div>

                <div id="trans-section" className="transparent-section">
                    <div className="trans-text-container">
                        <div className="trans-text">
                            <h2>About Me</h2>
                            <div className="profile-container">
                                <div className="profile-image"></div>
                                <div className="profile-description">
                                    <h3>Headlines</h3>
                                    <ul>
                                        <li>Europe-based remote worker.</li>
                                        <li>Full stack web development.</li>
                                        <li>Clean, responsive & mobile-first web design.</li>
                                        <li>Well documented projects.</li>
                                    </ul>
                                    <p>I have a passion for writing and developing modern, detailed, innovative and experimental web applications or software.</p>
                                    <p>I have worked with and led large diverse teams on a range of development projects using the latest technologies.</p>
                                    <p>I primarily work fulltime on a remote basis, but am open to one-off projects and freelance work.</p>
                                    <h3>Personal</h3>
                                    <p>I grew up in London but in recent years have adopted the 'nomad' lifestyle (I am currently to be found haunting France).</p>
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
import React from 'react'
import { Link } from 'gatsby'
import './ContactBox.css'

const ContactBox = () => {
    return (
        <div className="contact-box">
            <h2>| Contact Me</h2>
            <div className="contact-options">
                <a href="mailto:peter@thepetersweeney.com"><button className="press-to-contact">Email Me</button></a>
                <Link to="/schedule"><button className="press-to-contact">Schedule a Call</button></Link>
                <h4>Social</h4>
                <div className="social-buttons">
                    <a href="https://github.com/derrmru" target="_blank" rel="noreferrer"><button>Github</button></a>
                    <a href="https://medium.com/@pjsweeney1" target="_blank" rel="noreferrer"><button>Medium</button></a>
                </div>
            </div>
        </div>
    )
}

export default ContactBox
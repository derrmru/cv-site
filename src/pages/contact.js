import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactBox from '../components/ContactBox/ContactBox'
import Body from "../templates/Body/Body"
import SEO from '../components/SEO/SEO'
import './contact.css'

const Contact = () => {
    return (
        <Body>
            <SEO title="Get In Touch" />

            <h1>Get In Touch</h1>
            <div className="contact-container">
                <div className="email-form">
                    <ContactBox />
                </div>
                <div className="contact-form-page">
                    <h2>| Drop me an email</h2>
                    <ContactForm contactName="contact-page" />
                </div>
            </div>
        </Body>
    )
}

export default Contact
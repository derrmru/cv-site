import React, { useState } from 'react'
import {
    formContainer,
    form
} from './ContactForm.module.css'

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <div className={formContainer}>
                <form name={props.contactName} method="post" action="/submitted/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value={props.contactName} />
                    <p>
                    <label>
                        {props.language === 'French' ? 'Nom Complet' : 'Full Name'}
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        {props.language === 'French' ? 'Adresse Email' : 'Email Address'}
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        {props.language === 'French' ? 'Téléphone' : 'Telephone'}
                        <input type="text" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        Message
                        <textarea type="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                    </p>
                    <button type="submit">{props.language === 'French' ? 'Envoyer' : 'Send'}</button>
                </form>
            </div>
        </>
    )
}

export default Contact
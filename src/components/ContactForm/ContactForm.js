import React, { useState } from 'react'
import styles from './ContactForm.module.css'

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <div className={styles.formContainer}>
                <form name={props.contactName} method="post" action="/submitted/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                    <label>
                        Full Name
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        Email Address
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        Telephone
                        <input type="text" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                    </label>
                    </p>
                    <p>
                    <label>
                        Message
                        <textarea type="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                    </p>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact
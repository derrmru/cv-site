import React, { useState } from 'react'
import { 
    availableTimesContainer, 
    atBanner, 
    hr, 
    bookingForm, 
    submitButton, 
    bookingLabel, 
    requiredIcon, 
    textArea 
} from './BookingForm.module.css'

const BookingForm = (props) => {
    const selectedDate = new Date(props.selectedTime).toString()

    //form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [purpose, setPurpose] = useState('');
    const [medium, setMedium] = useState('');
    const [handle, setHandle] = useState('');

    return (
        <div className={availableTimesContainer}>
            <div className={atBanner}>
                <h2>About the Call</h2>
                <p>You have selected {selectedDate.split(':00 GMT')[0]}</p>
            </div>
            <hr className={hr} />

            <form className={bookingForm} onSubmit={(e) => props.handleSubmit(e, name, email, telephone, purpose, medium, handle)}>
                <label>
                    <div className={bookingLabel}>Full Name:</div> <div className={requiredIcon}>*</div>
                    <br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
                </label>
                <label>
                    <div className={bookingLabel}>Telephone:</div> <div className={requiredIcon}>*</div>
                    <br />
                    <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Mobile Number" required />
                </label>
                <label>
                    <div className={bookingLabel}>Email:</div> <div className={requiredIcon}>*</div>
                    <br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. example@example.com" required />
                </label>
                <label>
                    <div className={bookingLabel}>Purpose of Call:</div> <div className={requiredIcon}>*</div>
                    <br />
                    <textarea className={textArea} value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="Tell me about your project or reason for the call" required />
                </label>
                <label>
                    <div className={bookingLabel}>Medium:</div> <div className={requiredIcon}>*</div>
                    <br />
                    <select name="medium" value={medium} onBlur={(e) => setMedium(e.target.value)} onChange={(e) => setMedium(e.target.value)}>
                        <option value="" disabled defaultValue>-Select a medium-</option>
                        <option value="skype">Skype</option>
                        <option value="google">Google Hangouts</option>
                        <option value="zoom">Zoom</option>
                        <option value="whatsapp">Whatsapp</option>
                        <option value="telephone">Telephone</option>
                    </select>
                </label>
                {
                    medium === 'whatsapp' || medium === 'telephone' || medium === '' ?
                        <></> :
                            <label>
                                <div className={bookingLabel}>Handle:</div> <div className={requiredIcon}>*</div>
                                <br />
                                <input type="text" value={handle} onChange={(e) => setHandle(e.target.value)} placeholder={medium.substr(0, 1).toUpperCase() + medium.slice(1).toLowerCase() + ' handle'} required />
                            </label>
                }
                <input className={submitButton} type="submit" value="Send" />
            </form>

        </div>
    )
}

export default BookingForm
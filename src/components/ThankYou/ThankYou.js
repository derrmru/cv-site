import React from 'react'
import {
    availableTimesContainer,
    atBanner,
    hr
} from './ThankYou.module.css'

const ThankYou = (props) => {
    return (
        <div className={availableTimesContainer}>
            <div className={atBanner}>
                <h2>Thank You</h2>
                <p>You have successfully arranged an appointment to speak at {props.selectedTime}.</p>
                <p>Please check your emails for confirmation and further details.</p>
                <p>You can reach me via email on: <a href="mailto:peter@thepetersweeney.com">peter@thepetersweeney.com</a>, if you have any questions in the meantime.</p>
            </div>
            <hr className={hr} />
        </div>
    )
}

export default ThankYou
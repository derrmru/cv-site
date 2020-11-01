import React, { useState, useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import $ from 'jquery'
import Calendar from '../Calendar/Calendar'
import AvailableTimes from '../AvailableTimes/AvailableTimes'
import BookingForm from '../BookingForm/BookingForm'
import ThankYou from '../ThankYou/ThankYou'
import './Scheduler.css'

const Scheduler = () => {
    const [date, setDate] = useState(new Date())
    const [availableDates, setAvailableDates] = useState([]);
    const [availableTimes, setAvailableTimes] = useState();
    const [loadingTimes, setLoadingTimes] = useState(false);
    const [selectedTime, setSelectedTime] = useState();
    const [loadSend, setLoadSend] = useState(false);
    const [thankYou, setThankYou] = useState(false);

    const updateCalendar = (name, selectedDate) => {
        setDate(selectedDate)
        setSelectedTime(undefined) //This resets the booking form to time selector if a new date is selected
        setLoadingTimes(true)
        let packet = {"selectedDate": selectedDate};
        $.post("https://script.google.com/macros/s/AKfycbwTnmaAywcZZueQb20U2pVeU6LH6gdwl9gpsKk8Dbb1Ks1OigOA/exec", 
            packet, 
            async (res, status) => {
                let result = await JSON.parse(res);
                setAvailableTimes(result)
                setLoadingTimes(false)
                setLoadSend(false)
                setThankYou(false)
                scrollTo('#atBox')
                }).done(() => {
                    console.log('complete')
                });
    }

    const selectTime = (selectedTime) => {
        setSelectedTime(selectedTime)
    }

    const handleSubmit = (e, name, email, telephone, purpose, medium, handle) => {
        setLoadSend(true)
        e.preventDefault()
        const details = {
            name: name,
            startTime: selectedTime,
            email: email, 
            telephone: telephone, 
            purpose: purpose,
            medium: medium,
            handle: handle,
        }
        $.post("https://script.google.com/macros/s/AKfycbxd4KDyBgaCQFQ2GP_MO1ZSIRKqpeS4_NuCHFxReFDmN5vt0FgY/exec", 
            details, 
            async (res, status) => {
                console.log(res)
                console.log(status)
                setLoadSend(false)
                setThankYou(true)
                }).done(() => {
                    console.log('complete')
                });
    }

    useEffect(() => {
        let data = {"year": date.getFullYear()};
        $.post("https://script.google.com/macros/s/AKfycbxbzmQRo75bCz-Q8R4morQYrc5BdMKSLoyEHa0Psm-Zc30FeLmR/exec", 
            data, 
            async (res, status) => {
                let result = await JSON.parse(res);
                    setAvailableDates(result)
                }).done(() => {
                    console.log('complete')
                });
    }, [date])

    return (
        <>
        <h1 style={{marginTop: "40px"}}>Schedule a Call</h1>
            <div className="scheduler-container">

                <div className="scheduler-cal">
                    <Calendar 
                        name="scheduler"
                        availableDates={availableDates}
                        date={date}
                        updateCalendar={updateCalendar}
                        />
                </div>

                <div className="scheduler-times">
                    {
                        selectedTime === undefined ?

                            <AvailableTimes 
                                selectTime={selectTime}
                                loadingTimes={loadingTimes}
                                availableTimes={availableTimes}
                                />
                            
                                :
                            
                            loadSend ? 

                                <div>Loading...</div> 
                                
                                :
                                
                                thankYou ? <ThankYou 
                                                                selectedTime={selectedTime}
                                                                />

                                    :

                                    <BookingForm 
                                        selectedTime={selectedTime}
                                        handleSubmit={handleSubmit}
                                        />

                    }
                </div>

            </div>
        </>
    )
}

export default Scheduler
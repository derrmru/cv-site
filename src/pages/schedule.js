import React from 'react'
import Body from '../templates/Body/Body'
import Seo from '../components/Seo/Seo'
import Scheduler from '../components/Scheduler/Scheduler'

const Schedule = () => {
    return (
        <Body>
            <Seo 
                title="Schedule a call" 
                description="Reserve a time online to speak with me about your project."
                />
            <Scheduler />
        </Body>
    )
}

export default Schedule
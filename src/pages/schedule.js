import React from 'react'
import Body from '../templates/Body/Body'
import SEO from '../components/SEO/SEO'
import Scheduler from '../components/Scheduler/Scheduler'

const Schedule = () => {
    return (
        <Body>
            <SEO 
                title="Schedule a call" 
                description="Reserve a time online to speak with me about your project."
                />
            <Scheduler />
        </Body>
    )
}

export default Schedule
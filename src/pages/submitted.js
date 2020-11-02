import React from 'react'
import Body from '../templates/Body/Body'
import SEO from '../components/SEO/SEO'

const Submitted = () => {
    return (
        <Body>
            <SEO title="Thanks for getting in touch." />
            <div>
                <h1>Email Submitted</h1>
                Thanks for getting in touch. You'll hear from me shortly!
            </div>
        </Body>
    )
}

export default Submitted
import React from 'react'
import Body from '../templates/Body/Body'
import Seo from '../components/Seo/Seo'

const Submitted = () => {
    return (
        <Body>
            <Seo title="Thanks for getting in touch." />
            <div>
                <h1 style={{marginTop: '90px'}}>Email Submitted</h1>
                Thanks for getting in touch. You'll hear from me shortly!
            </div>
        </Body>
    )
}

export default Submitted
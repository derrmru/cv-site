import React from 'react'
import Footer from '../../components/Footer/Footer'
import './Body.css'

const Body = ({ children }) => {
    return (
        <div className="body-container">
            { children }

            <Footer />
        </div>
    )
}

export default Body
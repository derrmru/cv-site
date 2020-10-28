import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            ©{new Date().getFullYear()} thepetersweeney.com
        </div>
    )
}

export default Footer
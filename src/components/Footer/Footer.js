import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">©{new Date().getFullYear()} thepetersweeney.com</div>
        </div>
    )
}

export default Footer
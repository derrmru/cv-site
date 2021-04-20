import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">©2020 - {new Date().getFullYear()} thepetersweeney.com</div>
        </div>
    )
}

export default Footer
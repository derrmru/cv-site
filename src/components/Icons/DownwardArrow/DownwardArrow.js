import React, { useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import './DownwardArrow.css'

const DownwardArrow = () => {
    return (
        <button 
            className="downward-arrow"
            onKeyDown={(e) => e.code === "Space" && scrollTo('#section-2')}
            onClick={() => scrollTo('#section-2')}
            >
            <div className="d-icon">
                <div className="d-arrow"></div>
            </div>
        </button>
    )
}

export default DownwardArrow
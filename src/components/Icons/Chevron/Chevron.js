import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import './Chevron.css'

const Chevron = () => {
    const [mouse, setMouse] = useState(false);

    return (
        <button 
            className="chevron"
            onClick={() => scrollTo('#top')}
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
            >
                <div 
                    className="up-arrow"
                    style={mouse ?
                                {borderLeft: "2px solid var(--the-white)", borderTop: "2px solid var(--the-white)"} : 
                                {borderLeft: "2px solid var(--the-black)", borderTop: "2px solid var(--the-black)"}
                            }
                    ></div>
        </button>
    )
}

export default Chevron
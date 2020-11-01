import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import './DownwardArrow.css'

const DownwardArrow = (props) => {
    const [mouse, setMouse] = useState(false);

    return (
        <button 
            className="downward-arrow"
            aria-label="Scroll Downards"
            onKeyDown={(e) => e.code === "Space" && scrollTo(props.linkTo)}
            onClick={() => scrollTo(props.linkTo)}
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
            >
            <div className="d-icon">
                <div className="d-arrow" style={mouse ? 
                                                    {borderRight: "solid 2px var(--the-white)", borderBottom: "solid 2px var(--the-white)"} : 
                                                        {borderRight: "solid 2px var(--the-black)", borderBottom: "solid 2px var(--the-black)"}}></div>
            </div>
        </button>
    )
}

export default DownwardArrow
import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import {
    downwardArrow,
    dIcon,
    dArrow
} from './DownwardArrow.module.css'

const DownwardArrow = (props) => {
    const [mouse, setMouse] = useState(false);

    return (
        <button 
            className={downwardArrow}
            style={{animationDelay: props.delay}}
            aria-label="Scroll Downards"
            onKeyDown={(e) => e.code === "Space" && scrollTo(props.linkTo)}
            onClick={() => scrollTo(props.linkTo)}
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
            onTouchStart={() => setTimeout(true)}
            onTouchEnd={() => setTimeout(true)}
            >
            <div className={dIcon}>
                <div className={dArrow} style={mouse ? 
                                                    {borderRight: "solid 2px var(--the-white)", borderBottom: "solid 2px var(--the-white)"} : 
                                                        {borderRight: "solid 2px var(--the-black)", borderBottom: "solid 2px var(--the-black)"}}></div>
            </div>
        </button>
    )
}

export default DownwardArrow
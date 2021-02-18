import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import style from './DownwardArrow.module.css'

const DownwardArrow = (props) => {
    const [mouse, setMouse] = useState(false);

    return (
        <button 
            className={style.downwardArrow}
            aria-label="Scroll Downards"
            onKeyDown={(e) => e.code === "Space" && scrollTo(props.linkTo)}
            onClick={() => scrollTo(props.linkTo)}
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
            onTouchStart={() => setTimeout(true)}
            onTouchEnd={() => setTimeout(true)}
            >
            <div className={style.dIcon}>
                <div className={style.dArrow} style={mouse ? 
                                                    {borderRight: "solid 2px var(--the-white)", borderBottom: "solid 2px var(--the-white)"} : 
                                                        {borderRight: "solid 2px var(--the-black)", borderBottom: "solid 2px var(--the-black)"}}></div>
            </div>
        </button>
    )
}

export default DownwardArrow
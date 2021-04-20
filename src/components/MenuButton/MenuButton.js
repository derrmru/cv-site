import React from 'react'
import {
    menuButton,
    stripe,
    exitCross
} from './MenuButton.module.css'

const MenuButton = (props) => {
    return (
        <button 
            aria-label="toggle navigation menu on mobile"
            className={menuButton}
            onClick={() => props.setToggle()}
            >
            {
                props.vValue === 'none' ?
                    <>
                        <div className={stripe}></div>
                        <div className={stripe}></div>
                        <div className={stripe}></div>
                    </> :
                    <div className={exitCross}>|X|</div>
            }
        </button>
    )
}

export default MenuButton
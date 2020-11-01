import React from 'react'
import './MenuButton.css'

const MenuButton = (props) => {
    return (
        <button 
            aria-label="toggle navigation menu on mobile"
            className="menu-button"
            onClick={() => props.setToggle()}
            >
            {
                props.vValue === 'none' ?
                    <>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </> :
                    <div className="exit-cross">|X|</div>
            }
        </button>
    )
}

export default MenuButton
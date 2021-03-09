import React, { useState, useEffect } from 'react'
import MenuButton from "../../components/MenuButton/MenuButton"
import Sidebar from "../../components/Sidebar/Sidebar"
import Footer from '../../components/Footer/Footer'
import './Body.css'

const Body = (props) => {
    const [toggleMenu, setToggleMenu] = useState('none')
    const setToggle = () => {
        toggleMenu === 'none' ?
            setToggleMenu('flex') :
                setToggleMenu('none')
    }

    //language
    const [language, setLanguage] = useState('English')
    useEffect(() => {
        const userLang = window.navigator.language || window.navigator.userLanguage;
        (userLang === 'fr' || userLang === 'fr-fr') ? setLanguage('French') : setLanguage('English')
      }, [language])

    return (
        <>
            <div id="top"></div>
            <MenuButton 
                setToggle={setToggle}
                vValue={toggleMenu}
                />

            <Sidebar 
                language={props.language}
                setToggle={setToggle}
                vValue={toggleMenu}
                />
            
            <div className="body-container">

                { props.children }

                <Footer />
            </div>

        </>
    )
}

export default Body
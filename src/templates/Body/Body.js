import React, { useState, useLayoutEffect } from 'react'
import MenuButton from "../../components/MenuButton/MenuButton"
import Sidebar from "../../components/Sidebar/Sidebar"
import Footer from '../../components/Footer/Footer'
import './Body.css'

const Body = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState('inline')
    const setToggle = () => {
        toggleMenu === 'none' ?
            setToggleMenu('inline') :
                setToggleMenu('none')
    }

    //Listen for window resizing
    useLayoutEffect(() => {
      function updateSize() {
        window.innerWidth < 1025 ? 
            setToggleMenu('none') :
                setToggleMenu('inline')
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <>
            <div id="top"></div>
            <MenuButton 
                setToggle={setToggle}
                vValue={toggleMenu}
                />

            <Sidebar 
                setToggle={setToggle}
                vValue={toggleMenu}
                />
            
            <div className="body-container">

                { children }

                <Footer />
            </div>

        </>
    )
}

export default Body
import React from 'react'
import { Link } from 'gatsby'
import Computer from '../Computer/Computer'
import {
    sidebarContainer,
    sidebarTitles,
    computerContainer,
    sidebarItems,
    pageLink,
    linked
} from './Sidebar.module.css'

const Sidebar = (props) => {

    return (
        <div className={sidebarContainer} style={{ display: props.vValue }}>
            <div className={sidebarTitles}>
                <h1>Peter Sweeney</h1>
                <h2 style={{color: 'var(--the-white)'}}>{props.language === 'French' ? 'Développeur' : 'Developer'}</h2>
            </div>
            <hr />
            <div className={sidebarItems}>
                <div className={pageLink}>
                    <Link
                        to='/'
                        className={linked}
                        style={{color: 'var(--the-white)'}}
                    >
                        {props.language === 'French' ? 'Accueil' : 'Home'}
                    </Link>
                </div>
                <div className={pageLink}>
                    <Link
                        to='/about'
                        className={linked}
                        style={{color: 'var(--the-white)'}}
                    >
                        {props.language === 'French' ? 'Qui suis-je' : 'About'}
                    </Link>
                </div>
                <div className={pageLink}>
                    <Link
                        to='/projects'
                        className={linked}
                        style={{color: 'var(--the-white)'}}
                    >
                        Portfolio
                        </Link>
                </div>
                <div className={pageLink}>
                    <Link
                        to='/contact'
                        className={linked}
                        style={{color: 'var(--the-white)'}}
                    >
                        Contact
                        </Link>
                </div>
            </div>
            <hr />
            <div className={computerContainer}>
                <Computer />
            </div>
        </div>
    )
}

export default Sidebar
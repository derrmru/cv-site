import React from 'react'
import { Link } from 'gatsby'
import Computer from '../Computer/Computer'
import style from './Sidebar.module.css'

const Sidebar = (props) => {

    return (
        <div className={style.sidebarContainer} style={{ display: props.vValue }}>
            <div className={style.sidebarTitles}>
                <h1>Peter Sweeney</h1>
                <h2 style={{color: 'var(--the-white)'}}>{props.language === 'French' ? 'Développeur' : 'Developer'}</h2>
            </div>
            <hr />
            <div className={style.sidebarItems}>
                <div className={style.pageLink}>
                    <Link
                        to='/'
                        className="linked"
                        style={{color: 'var(--the-white)'}}
                    >
                        {props.language === 'French' ? 'Accueil' : 'Home'}
                    </Link>
                </div>
                <div className={style.pageLink}>
                    <Link
                        to='/about'
                        className="linked"
                        style={{color: 'var(--the-white)'}}
                    >
                        {props.language === 'French' ? 'Qui suis-je' : 'About'}
                    </Link>
                </div>
                <div className={style.pageLink}>
                    <Link
                        to='/projects'
                        className="linked"
                        style={{color: 'var(--the-white)'}}
                    >
                        Portfolio
                        </Link>
                </div>
                <div className={style.pageLink}>
                    <Link
                        to='/contact'
                        className="linked"
                        style={{color: 'var(--the-white)'}}
                    >
                        Contact
                        </Link>
                </div>
            </div>
            <hr />
            <div className={style.computerContainer}>
                <Computer />
            </div>
        </div>
    )
}

export default Sidebar
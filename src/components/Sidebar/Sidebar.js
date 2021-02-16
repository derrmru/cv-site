import React from 'react'
import { Link } from 'gatsby'
import Computer from '../Computer/Computer'
import './Sidebar.css'

const Sidebar = (props) => {

    return (
        <div className="sidebar-container" style={{ display: props.vValue }}>
            <div className="sidebar-titles">
                <h1>Peter Sweeney</h1>
                <h2>{props.language === 'French' ? 'Développeur' : 'Developer'}</h2>
            </div>
            <hr />
            <div className="sidebar-items">
                <div className="page-link">
                    <Link
                        to='/'
                        className="linked"
                    >
                        {props.language === 'French' ? 'Accueil' : 'Home'}
                    </Link>
                </div>
                <div className="page-link">
                    <Link
                        to='/about'
                        className="linked"
                    >
                        {props.language === 'French' ? 'Qui suis-je' : 'About'}
                    </Link>
                </div>
                <div className="page-link">
                    <Link
                        to='/projects'
                        className="linked"
                    >
                        Portfolio
                        </Link>
                </div>
                <div className="page-link">
                    <Link
                        to='/contact'
                        className="linked"
                    >
                        Contact
                        </Link>
                </div>
            </div>
            <hr />
            <div className="computer-container">
                <Computer />
            </div>
        </div>
    )
}

export default Sidebar
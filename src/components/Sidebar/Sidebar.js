import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Computer from '../Computer/Computer'
import './Sidebar.css'

const Sidebar = (props) => {
    //Menu Object to map out menu Items --- allows new menu items from Netlify
    const menuItems = useStaticQuery(graphql`
    query menuItems {
        allSitePage(sort: {fields: path}) {
          nodes {
            path
          }
        }
      }
    `)
    const pages = menuItems.allSitePage.nodes;

    return (
        <div className="sidebar-container" style={{display: props.vValue}}>
            <div className="sidebar-scroll">
                <div className="sidebar-titles">
                    <h1>Peter Sweeney</h1>
                    <h2>Developer</h2>
                </div>
                <hr />
                <div className="sidebar-items">
                    {
                        pages.map((pageInfo, i) => {
                            let words;
                            let page = pageInfo.path;
                            if (page === '/') {
                                words = 'Home'
                            } else if (page !== '/dev-404-page/' && page !== '/404/' && page !== '/404.html' && page !== '/schedule/' && page !== '/submitted/') {
                                let justWords = page.toString().split('/').join(' ').split('-').join(' ').split(' ')
                                let updateArr = [];
                                justWords.map(word => updateArr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
                                words = updateArr.join(' ')
                            } else {
                                words = '404'
                            }
                            return words !== '404' && (
                                <div 
                                    key={'page' + i}
                                    className="page-link"

                                    >
                                    <Link 
                                        to={page}
                                        className="linked"
                                        >
                                            {words}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
                <div className="computer-container">
                    <Computer />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
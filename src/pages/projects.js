import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Seo from '../components/Seo/Seo'
import Body from '../templates/Body/Body'
import './projects.css'

const Projects = (props) => {
    const years = ['2021', '2020', ''];
    const [date, setDate] = useState('')
    const data = useStaticQuery(graphql`
        query projectsQuery {
            allMarkdownRemark {
            edges {
                node {
                frontmatter {
                    title
                    date
                    type
                    repository
                    description
                    specialisms
                    projectLink
                    period
                    clientLink
                    client
                    slug
                }
                }
            }
            }
        }
    `)
    const projects = data.allMarkdownRemark.edges;
    
    return (
        <Body>
            <Seo 
                title="Portfolio" 
                description="A Portfolio of previous web development work and client projects."
                />
            <h1 className="projects-page-title">Portfolio</h1>
            <div className="projects-container">
                <div className="year-select-container">
                    <div style={{height: 'fit-content'}}>&#62; Filter By Year :</div>
                    {
                        years.map((year, i) => {
                            return <button 
                                key={'yearselect' + i}
                                className="year-select-button"
                                onClick={() => setDate(year)}
                                >
                                    {year === '' ? 'Reset' : year}
                                </button>
                        })
                    }
                </div>
                {
                    projects
                        .sort((a, b) => {
                            return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
                        })
                        .filter((edge) => edge.node.frontmatter.date.indexOf(date) >= 0 )
                        .map((edge, i) => {
                            const project = edge.node.frontmatter
                            return <a 
                                key={'project' + i}
                                className="project-link"
                                href={project.slug}
                                style={{color: 'var(--the-black)'}}
                                >
                                <div
                                    className="project-card"
                                    >
                                        <div className="project-title">{project.title}</div>
                                        <div className="project-hr"></div>
                                        <div className="project-description">{project.description && project.description}</div>
                                        <div className="project-hr"></div>
                                        <div>{props.language === 'French' ? project.period[0] : project.period[1]}</div>
                                </div>
                            </a>
                        })
                }
            </div>
        </Body>
    )
}

export default Projects
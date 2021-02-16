import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/SEO/SEO'
import Body from '../templates/Body/Body'
import './projects.css'

const Projects = (props) => {
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
            <SEO 
                title="Portfolio" 
                description="A Portfolio of my previous work."
                />
            <h1>Portfolio</h1>
            <div className="projects-container">
                {
                    projects.sort((a, b) => {
                        return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
                    }).map((edge, i) => {
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
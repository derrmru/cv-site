import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import SideProject from '../SideProject/SideProject'

const SideProjects = ({ language, year }) => {
    return (
        <>
        <h3>{language === 'French' ? "Projets de Loisirs" : "Side Projects"}</h3>
        <StaticQuery
            query={graphql`
            query SPQuery {
                allMarkdownRemark(filter: {frontmatter: {type: {eq: "side-project"}}}) {
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
                        }
                      }
                    }
                  }
              }
            `}
            render={data => (
                <>
                {console.log(data)}
                {
                    data.allMarkdownRemark.edges.map((edge, i) => {
                        const front = edge.node.frontmatter;
                        if (front.date.split('/')[2] === year) {
                            return <div key={'sideproject' + i}>
                                    <SideProject
                                        language={language}
                                        title={front.title}
                                        projectLink={front.projectLink}
                                        date={language === 'French' ? front.period[0] : front.period[1]}
                                        specialisms={front.specialisms}
                                        repository={front.repository}
                                        description={front.description}
                                    />
                                </div>
                        } else {
                            return ''
                        }
                    })
                }
                </>
            )}
            />
        </>
    )
}

export default SideProjects
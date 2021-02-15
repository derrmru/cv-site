import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Experience from '../Experience/Experience'

const Experiences = ({ language, year }) => {
    return (
        <>
        <h3>{language === 'French' ? "Expérience" : "Experience"}</h3>
        <StaticQuery
            query={graphql`
            query MyQuery {
              allMarkdownRemark(filter: {frontmatter: {type: {eq: "experience"}}}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        client
                        date
                        clientLink
                        period
                        projectLink
                        specialisms
                        repository
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
                <>
                {
                    data.allMarkdownRemark.edges.map((edge, i) => {
                        const front = edge.node.frontmatter;
                        if (front.date.split('/')[2] === year) {
                            return <div key={'experience' + i}>
                                    <Experience
                                        language={language}
                                        title={front.title}
                                        projectLink={front.projectLink}
                                        client={front.client}
                                        clientLink={front.clientLink}
                                        date={language === 'French' ? front.period[0] : front.period[1]}
                                        specialisms={front.specialisms}
                                        repository={front.repository}
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

export default Experiences
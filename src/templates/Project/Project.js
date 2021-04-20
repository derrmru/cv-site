import React from 'react'
import { graphql } from 'gatsby'
import Body from '../Body/Body'
import Seo from '../../components/Seo/Seo'
import ContactForm from '../../components/ContactForm/ContactForm'
import {
  projectBody,
  projectMain,
  projectTitle,
  projectDetails,
  pdHeader,
  pdContactContainer,
  pdContact,
  projectSpan
} from './Project.module.css'

const Project = ({ data }) => {
  const front = data.markdownRemark.frontmatter;
    console.log(front)
    return (
        <Body>
          <Seo 
            title={front.title}
            description={'Selected Portfolio Item: ' + front.description}
            />
          <h1 className={projectTitle}>{front.title}</h1>
          <div className={projectSpan}><i> - {front.period[1]}</i></div>
          <div className={projectBody}>
            <div className={projectMain}>
              <h3>Short Description:</h3>
              <p>{front.description}</p>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
            <div className={projectDetails}>
              <h3 className={pdHeader}>Project Details</h3>
              {
                front.client && <p><strong>Client:</strong> <a href={front.clientLink} target="_blank" rel="noreferrer">{front.client}</a></p>
              }
              <p><strong>Completion Date:</strong> {front.date}</p>
              <p><strong>Skillset:</strong></p>
              <ul>
                {front.specialisms.map((specialism, i) => {
                  return <li key={'spec' + i}>
                    {specialism}
                  </li>
                })}
              </ul>
              <p><strong>Links:</strong></p>
              {
                front.projectLink && <a href={front.projectLink} target="_blank" rel="noreferrer">Live Application</a>
              }
              {
                front.repository && <p><a href={front.repository} target="_blank" rel="noreferrer">Repository</a></p>
              }
              <div className={pdContactContainer}>
                <h4 className={pdContact}>Get In Touch</h4>
                <ContactForm contactName="project-page" />
              </div>
            </div>
          </div>
        </Body>
    )
}

export const projectQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
      }
    }
  }
`

export default Project
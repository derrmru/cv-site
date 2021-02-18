import React from 'react'
import { graphql } from 'gatsby'
import Body from '../Body/Body'
import SEO from '../../components/SEO/SEO'
import ContactForm from '../../components/ContactForm/ContactForm'
import style from './Project.module.css'

const Project = ({ data }) => {
  const front = data.markdownRemark.frontmatter;
    console.log(front)
    return (
        <Body>
          <SEO 
            title={front.title}
            description={'Selected Portfolio Item: ' + front.description}
            />
          <div className={style.projectBody}>
            <div className={style.projectMain}>
              <h1 className={style.projectTitle}>{front.title}</h1>
              <span><i> - {front.period[1]}</i></span>
              <h3>Short Description:</h3>
              <p>{front.description}</p>
              <div className={style.projectText}
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                    />
            </div>
            <div className={style.projectDetails}>
              <h3 className={style.pdHeader}>Project Details</h3>
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
              <p><a href={front.repository} target="_blank" rel="noreferrer">Repository</a></p>
              <div className={style.pdContactContainer}>
                <h4 className={style.pdContact}>Get In Touch</h4>
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
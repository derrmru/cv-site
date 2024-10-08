/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Peter Sweeney`,
    author: `Peter Sweeney`,
    siteUrl: `https://thepetersweeney.com`,
    description: `Peter Sweeney is a web and software developer, with specialisms in React, Progressive Web Apps, Single Page Applications, and Gatsby JS.`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience-pages`,
        path: `${__dirname}/src/experience`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `side-project-pages`,
        path: `${__dirname}/src/sideProjects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-181896749-1`,
        head: false,
        anonymize: true,
      },
      pluginConfig: {
        head: true
      }
    },
  ],
}

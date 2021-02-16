exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    //Blogs create pages
    const projectTemplate = require.resolve(`./src/templates/Project/Project.js`)

    const project = await graphql(`
      {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
          edges {
            next {
              frontmatter {
                title
                slug
              }
            }
            node {
              frontmatter {
                slug
              }
            }
            previous {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (project.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    const articles = project.data.allMarkdownRemark.edges;
    articles.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.slug,
        component: projectTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          prev: index === 0 ? null : articles[index - 1].node,
          next: index === articles.length - 1 ? null : articles[index + 1].node
        },
      })
    })

  }
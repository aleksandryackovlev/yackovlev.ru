const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              id
              date
              title
              description
              tags
            }
          }
          next {
            frontmatter {
              id
              title
            }
          }
          previous {
            frontmatter {
              id
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;
  const count = posts.length;

  createPage({
    path: '/',
    component: path.resolve(__dirname, 'src/templates/blog-list.js'),
    context: { posts: posts.map(({ node: { frontmatter } }) => frontmatter) }
  });

  posts.forEach(({ node: { html, frontmatter }, next, previous }, index) => {
    createPage({
      path: `/${frontmatter.id}`,
      component: path.resolve(__dirname, 'src/templates/blog-item.js'),
      context: {
        html,
        ...frontmatter,
        pagination: {
          previous,
          next,
        }
      }
    });
  })
};

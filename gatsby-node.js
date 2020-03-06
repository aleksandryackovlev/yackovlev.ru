const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        nodes {
          html
          frontmatter {
            id
            date
            title
            description
            tags
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }


  createPage({
    path: '/',
    component: path.resolve(__dirname, 'src/templates/blog-list.js'),
    context: { posts: result.data.allMarkdownRemark.nodes.map(({ frontmatter }) => frontmatter) }
  });
};

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

  const posts = result.data.allMarkdownRemark.nodes;
  const count = result.data.allMarkdownRemark.nodes.length;

  createPage({
    path: '/',
    component: path.resolve(__dirname, 'src/templates/blog-list.js'),
    context: { posts: posts.map(({ frontmatter }) => frontmatter) }
  });

  posts.forEach(({ html, frontmatter }, index) => {
    createPage({
      path: `/${frontmatter.id}`,
      component: path.resolve(__dirname, 'src/templates/blog-item.js'),
      context: {
        html,
        ...frontmatter,
        pagination: {
          prev: index === 0 ? null : `/${posts[index - 1].frontmatter.id}`,
          next: index < count - 1 ? `/${posts[index + 1].frontmatter.id}` : null ,
        }
      }
    });
  })
};

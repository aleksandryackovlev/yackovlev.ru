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

  const posts = await Promise.all(result.data.allMarkdownRemark.edges.map(
    async ({ node: { html, frontmatter }, next, previous }) => {
      const relatedPosts = await graphql(`
        {
          allMarkdownRemark(filter: {frontmatter: {tags: {in: [${frontmatter.tags.reduce((res, tag) => `${res}, "${tag}"`, '')}"Cucumber"]}, id: {ne: "${frontmatter.id}"}}}, limit: 3, sort: {fields: frontmatter___date}) {
            edges {
              node {
                html
                frontmatter {
                  id
                  date
                  title
                  description
                }
              }
            }
          }
        }
      `);

      console.log(frontmatter);

      return {
        html,
        ...frontmatter,
        pagination: {
          previous,
          next,
        },
        relatedPosts: relatedPosts.data.allMarkdownRemark.edges,
      };
    }
  ));

  const count = posts.length;

  createPage({
    path: '/',
    component: path.resolve(__dirname, 'src/templates/blog-list.js'),
    context: { posts }
  });

  posts.forEach((post) => {
    createPage({
      path: `/${post.id}`,
      component: path.resolve(__dirname, 'src/templates/blog-item.js'),
      context: post,
    });
  });
};

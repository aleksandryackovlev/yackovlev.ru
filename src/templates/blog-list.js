import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Typography from '../components/ui/typography';
import Box from '../components/ui/box';
import Link from '../components/ui/link';
import Button from '../components/ui/button';
import { Row, Column } from '../components/ui/grid';

const BlogList = ({
  pageContext: {
    title: pageTitle,
    posts,
    pagination: { current, total },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    {pageTitle && (
      <Typography
        marginBottom="l"
        isBold
        component="title"
        fontSize="l"
        level={1}
      >
        {pageTitle}
      </Typography>
    )}
    <Box paddingBottom="xxl">
      {posts.map(({ id, title, date, description, tags }, index) => (
        <Box
          key={id}
          paddingTop={index ? 'm' : 'none'}
          paddingBottom="l"
          borderBottom="primary"
        >
          <Typography component="title">
            <Link type="secondary" to={`/${id}`}>
              {title}
            </Link>
          </Typography>
          <Typography color="secondary">Posted on {date}</Typography>
          <Typography component="paragraph" marginBottom="m">
            {description}
          </Typography>
          <Row justify="spaceBetween">
            <Column width="auto">
              {tags.map(tag => (
                <Button type="secondary" key={tag} href={`/tag/${tag}`}>
                  {tag}
                </Button>
              ))}
            </Column>
            <Column width="auto">
              <Button href={`/${id}`}>Read</Button>
            </Column>
          </Row>
        </Box>
      ))}
    </Box>
    {total > 1 && (
      <Box paddingBottom="xxl">
        <Typography align="center">
          {[...Array(total - 1).keys()].map(page => (
            <Button
              disabled={current === page + 1}
              type={current === page + 1 ? 'secondary' : 'primary'}
              href={`/${page ? page + 1 : ''}`}
            >
              {page + 1}
            </Button>
          ))}
        </Typography>
      </Box>
    )}
  </Layout>
);

BlogList.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.object),
    pagination: PropTypes.shape({
      current: PropTypes.number,
      total: PropTypes.number,
    }),
  }).isRequired,
};

export default BlogList;

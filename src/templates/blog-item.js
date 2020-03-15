import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight as nextIcon,
  faChevronLeft as previousIcon,
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';

import SEO from '../components/seo';

import Typography from '../components/ui/typography';
import Box from '../components/ui/box';
import Button from '../components/ui/button';
import Link from '../components/ui/link';
import { Row, Column } from '../components/ui/grid';

/* eslint-disable react/no-danger */
const BlogItem = ({
  pageContext: { html, title, date, tags, pagination, relatedPosts },
}) => (
  <Layout>
    <SEO title="Home" />
    <Box paddingBottom="xxl">
      <Box paddingBottom="xl">
        <Typography component="title" level="1">
          {title}
        </Typography>
        <Typography marginBottom="l" color="secondary">
          Posted on {date}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
      <Box paddingBottom="xl" borderBottom="primary">
        {tags.map(tag => (
          <Button type="secondary" key={tag} href={`/tag/${tag}`}>
            {tag}
          </Button>
        ))}
      </Box>
      <Box paddingTop="xl">
        <Row>
          <Column width="6">
            {pagination.previous && (
              <Link
                type="secondary"
                to={`/${pagination.previous.frontmatter.id}`}
              >
                <Row alignItems="center" justify="start" paddings="s">
                  <Column width="auto">
                    <FontAwesomeIcon icon={previousIcon} size="lg" />
                  </Column>
                  <Column width="auto">
                    <Typography align="left">
                      <Typography component="label" isCaps fontSize="s">
                        Previous
                      </Typography>
                    </Typography>
                    <Typography
                      marginBottom="none"
                      align="left"
                      component="title"
                      level={3}
                      fontSize="s"
                    >
                      {pagination.previous.frontmatter.title}
                    </Typography>
                  </Column>
                </Row>
              </Link>
            )}
          </Column>
          <Column width="6">
            {pagination.next && (
              <Link type="secondary" to={`/${pagination.next.frontmatter.id}`}>
                <Row alignItems="center" justify="end" paddings="s">
                  <Column width="auto">
                    <Typography align="right">
                      <Typography component="label" isCaps fontSize="s">
                        Next
                      </Typography>
                    </Typography>
                    <Typography
                      marginBottom="none"
                      align="right"
                      component="title"
                      level={3}
                      fontSize="s"
                    >
                      {pagination.next.frontmatter.title}
                    </Typography>
                  </Column>
                  <Column width="auto">
                    <FontAwesomeIcon icon={nextIcon} size="lg" />
                  </Column>
                </Row>
              </Link>
            )}
          </Column>
        </Row>
      </Box>
      {!!relatedPosts && !!relatedPosts.length && (
        <Box paddingTop="xl">
          <Box paddingTop="xl" borderTop="primary">
            <Typography
              component="title"
              level={2}
              fontSize="l"
              marginBottom="l"
            >
              Related posts:
            </Typography>
            <Row paddings="l">
              {relatedPosts.map(
                ({
                  node: {
                    frontmatter: { id, title: postTitle, description },
                  },
                }) => (
                  <Column width="4">
                    <Typography component="title" level={3} fontSize="s">
                      <Link type="secondary" to={`/${id}`}>
                        {postTitle}
                      </Link>
                    </Typography>
                    <Typography color="secondary">Posted on {date}</Typography>
                    <Typography>{description}</Typography>
                    <Typography align="right">
                      <Button href={`/${id}`}>Read</Button>
                    </Typography>
                  </Column>
                )
              )}
            </Row>
          </Box>
        </Box>
      )}
    </Box>
  </Layout>
);
/* eslint-enable react/no-danger */

BlogItem.propTypes = {
  pageContext: PropTypes.shape({
    html: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    pagination: PropTypes.shape({
      next: PropTypes.object,
      previous: PropTypes.object,
    }),
    relatedPosts: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default BlogItem;

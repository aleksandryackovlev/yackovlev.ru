import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight as nextIcon, faChevronLeft as previousIcon } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '../components/ui/typography';
import Box from '../components/ui/box';
import Button from '../components/ui/button';
import { Row, Column } from '../components/ui/grid';

const IndexPage = (props) => {
const {
  pageContext: {
    html,
    title,
    date,
    tags,
    pagination,
    relatedPosts,
  },
} = props;
console.log(props);

return (
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
          {tags.map((tag) => <Button type="secondary" key={tag} href={`/tag/${tag}`}>{tag}</Button>)}
        </Box>
        <Box paddingTop="xl">
          <Row>
            <Column width="6">
              {pagination.previous && (
                <Link to={`/${pagination.previous.frontmatter.id}`}>
                  <Row alignItems="center" justify="start" paddings="s">
                    <Column width="auto">
                      <FontAwesomeIcon
                        icon={previousIcon}
                        size="lg"
                      />
                    </Column>
                    <Column width="auto">
                      <Typography align="left">
                        <Typography component="label" isCaps fontSize="s">
                          Previous
                        </Typography>
                      </Typography>
                      <Typography marginBottom="none" align="left" component="title" level={3} fontSize="s">
                        {pagination.previous.frontmatter.title}
                      </Typography>
                    </Column>
                  </Row>
                </Link>
              )}
            </Column>
            <Column width="6">
              {pagination.next && (
                <Link to={`/${pagination.next.frontmatter.id}`}>
                  <Row alignItems="center" justify="end" paddings="s">
                    <Column width="auto">
                      <Typography align="right">
                        <Typography component="label" isCaps fontSize="s">
                          Next
                        </Typography>
                      </Typography>
                      <Typography marginBottom="none" align="right" component="title" level={3} fontSize="s">
                        {pagination.next.frontmatter.title}
                      </Typography>
                    </Column>
                    <Column width="auto">
                      <FontAwesomeIcon
                        icon={nextIcon}
                        size="lg"
                      />
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
              <Typography component="title" level={2} fontSize="l" marginBottom="l">
                Related posts:
              </Typography>
              <Row paddings="l">
                {relatedPosts.map(({ node: { frontmatter: { id, title, description }} }) => (
                  <Column width="4">
                    <Typography component="title" level={3} fontSize="s">
                      {title}
                    </Typography>
                    <Typography>
                      {description}
                    </Typography>
                  </Column>
                ))}
              </Row>
            </Box>
          </Box>
        )}
    </Box>
  </Layout>
);
};

export default IndexPage

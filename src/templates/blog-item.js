import React from "react"
import { Link } from "gatsby"

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
    pagination
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
          <Row justify="spaceBetween">
            <Column width="auto">
              {pagination.prev && (
                <Button href={pagination.prev}>Previous</Button>
              )}
            </Column>
            <Column width="auto">
              {pagination.next && (
                <Button href={pagination.next}>Next</Button>
              )}
            </Column>
          </Row>
        </Box>
    </Box>
  </Layout>
);
};

export default IndexPage

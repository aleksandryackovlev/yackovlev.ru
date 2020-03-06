import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '../components/ui/typography';
import Box from '../components/ui/box';
import Button from '../components/ui/button';
import { Row, Column } from '../components/ui/grid';

const IndexPage = (props) => {
console.log(props);
const {
  pageContext: {
    posts,
  },
} = props;
return (
  <Layout>
    <SEO title="Home" />
    <Box paddingBottom="xxl">
      {posts.map(({ id, title, date, description, tags }, index) => (
        <Box key={id} paddingTop={index ? 'm' : 'none'} paddingBottom="l" borderBottom="primary">
          <Typography component="title">
            {title}
          </Typography>
          <Typography color="secondary">
            Posted on {date}
          </Typography>
          <Typography component="paragraph" marginBottom="m">
            {description}
          </Typography>
          <Row justify="spaceBetween">
            <Column width="auto">
              {tags.map((tag) => <Button type="secondary" key={tag} href={`/tag/${tag}`}>{tag}</Button>)}
            </Column>
            <Column width="auto">
              <Button href={`/${id}`}>More</Button>
            </Column>
          </Row>
        </Box>
      ))}
    </Box>
  </Layout>
);
};

export default IndexPage

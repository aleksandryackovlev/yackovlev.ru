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
    pagination: {
      current,
      total,
    },
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
              <Button href={`/${id}`}>Read</Button>
            </Column>
          </Row>
        </Box>
      ))}
    </Box>
    {total > 1 && (
      <Box paddingBottom="xxl">
        <Typography align="center">
          {[...Array(total - 1).keys()].map((page) => (
            <Button disabled={current === page + 1} type={current === page + 1 ? 'secondary': 'primary'} href={`/${page ? page + 1 : ''}`}>{page + 1}</Button>
          ))}
        </Typography>
      </Box>
    )}
  </Layout>
);
};

export default IndexPage

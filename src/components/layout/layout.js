/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import '../../styles/base.css';

import { Column, Row } from '../ui/grid';
import Typography from '../ui/typography';
import Box from '../ui/box';

import Container from './container';
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";
import me from './yackovlev.png';

const posts = [
  {
    id: 1,
    title: 'BDD for frontend development',
    date: 'February 1, 2020',
    description: 'E-commerce sites have taken retail online and with such its audience. Once representatives used to be able to physically approach customers to see if they needed their assistance, now when visitors are on a website many companies are not aware of their existence unless the visitor makes contact.',
    tags: ['cypress', 'cucumber', 'testing'],
  },
  {
    id: 2,
    title: 'Test automation with Cypress, Cucumber and Jenkins',
    date: 'February 1, 2020',
    description: 'E-commerce sites have taken retail online and with such its audience. Once representatives used to be able to physically approach customers to see if they needed their assistance, now when visitors are on a website many companies are not aware of their existence unless the visitor makes contact.',
    tags: ['cypress', 'cucumber', 'testing'],
  },
  {
    id: 3,
    title: 'Some interesting title',
    date: 'February 1, 2020',
    description: 'E-commerce sites have taken retail online and with such its audience. Once representatives used to be able to physically approach customers to see if they needed their assistance, now when visitors are on a website many companies are not aware of their existence unless the visitor makes contact.',
    tags: ['cypress', 'cucumber', 'testing'],
  },
  {
    id: 4,
    title: 'Some interesting title',
    date: 'February 1, 2020',
    description: 'E-commerce sites have taken retail online and with such its audience. Once representatives used to be able to physically approach customers to see if they needed their assistance, now when visitors are on a website many companies are not aware of their existence unless the visitor makes contact.',
    tags: ['cypress', 'cucumber', 'testing'],
  }
];

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteSocialLinksQuery {
      site {
        siteMetadata {
          social {
            icon
            link
          }
          author
          description
        }
      }
      allMarkdownRemark(limit: 5, sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            id
            date
            title
          }
        }
      }
    }
  `)

  return (
    <div className={styles.layout}>
      <Container>
        <Header {...data.site.siteMetadata} />
      </Container>
      <div className={styles.content}>
        <Container>
          <Row paddings="l">
            <Column width="9">
              <main>{children}</main>
            </Column>
            <Column width="3">
              <Box borderBottom="primary" paddingTop="xs" paddingBottom="m">
                <Typography align="center">
                  <img width="150" height="150" src={me} />
                  <Typography isCaps marginBottom="xs" fontSize="s" component="title" level={3}>
                    {data.site.siteMetadata.author}
                  </Typography>
                  <Typography color="secondary" marginBottom="none">
                    Frontend developer
                  </Typography>
                  <Typography color="secondary" marginBottom="xs">
                    Mail.ru Group
                  </Typography>
                  <Typography color="secondary" marginBottom="none">
                    <a href="mailto:aleksandryackovlev">aleksandryackovlev@yandex.ru</a>
                  </Typography>
                </Typography>
              </Box>
              <Box paddingTop="m">
                <Typography align="center">
                  <Typography isCaps marginBottom="m" fontSize="s" component="title" level={3}>
                    Recent posts
                  </Typography>
                </Typography>
                {data.allMarkdownRemark.nodes.map(({ frontmatter: { id, title, date } }) => (
                  <Box key={id} paddingBottom="xs">
                    <Typography marginBottom="none" align="center" isBold>
                      <a href={`/${id}`}>
                        {title}
                      </a>
                    </Typography>
                    <Typography align="center" color="secondary">
                      {date}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Column>
          </Row>
        </Container>
      </div>
      <Footer {...data.site.siteMetadata} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

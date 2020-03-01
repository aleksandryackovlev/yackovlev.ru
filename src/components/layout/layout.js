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

import Container from './container';
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"

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
            <Column width="8">
              <main>{children}</main>
            </Column>
            <Column width="4">
              Sidebar
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

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
        }
      }
    }
  `)

  return (
    <div className={styles.layout}>
      <Container>
        <Header social={data.site.siteMetadata.social} />
      </Container>
      <div className={styles.content}>
        <Container>
          <main>{children}</main>
        </Container>
      </div>
      <Footer social={data.site.siteMetadata.social} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

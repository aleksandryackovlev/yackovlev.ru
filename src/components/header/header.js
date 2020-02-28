import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from './logo.png';
import github from './github.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.grid}>
      <h1>
        <Link to="/">
          <img src={logo} className={styles.logo} />
        </Link>
      </h1>
      <div>
        <a>
          <img src={github} />
          <img src={twitter} />
          <img src={linkedin} />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

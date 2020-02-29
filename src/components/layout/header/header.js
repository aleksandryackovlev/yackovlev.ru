import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from './logo.png';
import styles from './header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub as github, faLinkedin as linkedin, faTwitter as twitter } from '@fortawesome/free-brands-svg-icons'

const icons = { github, twitter, linkedin };

const Header = ({ social }) => (
  <header className={styles.header}>
    <div className={styles.grid}>
      <div className={styles.blogTitle}>
        <Link to="/">
          <img src={logo} className={styles.logo} />
        </Link>
        <div>
          <div className={styles.title}>
             Alex Yackovlev
          </div>
          <div className={styles.subTitle}>
            Personal blog
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        {social.map(({ icon, link }) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon
              className={styles.socialIcon}
              icon={icons[icon]}
              size="lg"
            />
          </a>
        ))}
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

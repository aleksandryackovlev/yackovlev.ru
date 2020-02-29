import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from '../container';

import logo from './logo.png';
import styles from './footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub as github, faLinkedin as linkedin, faTwitter as twitter } from '@fortawesome/free-brands-svg-icons'

const icons = { github, twitter, linkedin };

const Header = ({ social }) => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.grid}>
        <div>
          <Link to="/">
            <img src={logo} className={styles.logo} />
          </Link>
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
      <div className={styles.copyright}>
        © {new Date().getFullYear()}, Aleksandr Yackovlev
      </div>
    </Container>
  </footer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

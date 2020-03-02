import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub as github, faLinkedin as linkedin, faTwitter as twitter } from '@fortawesome/free-brands-svg-icons'


import Typography from '../../ui/typography';
import Box from '../../ui/box';
import { Row, Column } from '../../ui/grid';

import logo from './logo.png';
import styles from './header.module.css';

const icons = { github, twitter, linkedin };

const Header = ({ social, author, description }) => (
  <header>
    <Box paddingBottom="m">
      <Box paddingTop="m" paddingBottom="m" borderBottom="primary">
        <Row justify="spaceBetween" alignItems="center">
          <Column width="auto">
            <Row alignItems="center" paddings="s">
              <Column width="auto">
                <Link to="/">
                  <img src={logo} className={styles.logo} />
                </Link>
              </Column>
              <Column width="auto">
                <div>
                  <Typography component="label" color="secondary" isCaps fontSize="xl">
                    {author}
                  </Typography>
                </div>
                <div>
                  <Typography component="label" fontSize="s">
                    {description}
                  </Typography>
                </div>
              </Column>
            </Row>
          </Column>
          <Column width="auto">
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
          </Column>
        </Row>
      </Box>
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

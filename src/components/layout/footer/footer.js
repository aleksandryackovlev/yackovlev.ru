import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub as github,
  faLinkedin as linkedin,
  faTwitter as twitter,
} from '@fortawesome/free-brands-svg-icons';

import Container from '../container';

import Typography from '../../ui/typography';
import Box from '../../ui/box';
import { Column, Row } from '../../ui/grid';

import logo from './logo.png';
import styles from './footer.module.css';

const icons = { github, twitter, linkedin };

const Footer = ({ author, description }) => (
  <footer>
    <Box paddingTop="xl" paddingBottom="m" background="secondary">
      <Container>
        <Box paddingBottom="m" borderBottom="secondary" background="none">
          <Row justify="spaceBetween" alignItems="center">
            <Column xs="auto">
              <Row alignItems="center" paddings="s">
                <Column xs="auto">
                  <Link to="/">
                    <img src={logo} alt={author.name} className={styles.logo} />
                  </Link>
                </Column>
                <Column xs="auto">
                  <div>
                    <Typography
                      component="label"
                      color="secondary"
                      isCaps
                      fontSize="xl"
                    >
                      {author.name}
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
            <Column xs="auto">
              {author.social.map(({ icon, link }) => (
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
        <Box paddingTop="m" background="none">
          <Typography component="label">
            © {new Date().getFullYear()}, Aleksandr Yackovlev
          </Typography>
        </Box>
      </Container>
    </Box>
  </footer>
);

Footer.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default Footer;

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import LinkMenu from '../shared/link-menu';

import './layout.scss'
import '../../styles/global.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { 'http-equiv': 'content-type', content: 'text/html;charset=utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
            { name: 'description', content: 'Sam Kuhlmann Software Developer' },
            { name: 'keywords', content: 'software, development, application, web development, blockchain, ulysses' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="wrapper">
          <div className="content">
            {children}
          </div>
          <footer className="footer">
            <LinkMenu />
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

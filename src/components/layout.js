/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "../css/global.css"

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
        <svg viewBox='0 0 149 150' xmlns='http://www.w3.org/2000/svg' id='pridecodes-code-corner-svg' style={{ position: 'fixed', zIndex: 9999, top: 0, borderWidth: 0, borderColor: 'black', borderStyle: 'solid', right: 0 }}>
          <g id='random' fill='none' fillRule='evenodd'>
            <g id='code-Corner' transform='translate(-1 -75)'>
              <g id='code' transform='rotate(-45 91.71 37.927)'>
                <polygon id='Rectangle-2' fill='#D3555C' points='1.35355339 4.26325641e-14 36.7088924 35.3553391 1 35.4123828' />
                <polygon id='Rectangle-2-Copy' fill='#F48D3A' points='1 35.4123828 36.7067649 35.3553391 72.0599976 70.7106781 1 70.8223826' />
                <polygon id='Rectangle-2-Copy-2' fill='#FDC753' points='1 70.8247655 72.0642315 70.7106781 106.712464 105.35891 1 106.237148' />
                <polygon id='Rectangle-2-Copy-3' fill='#70BC53' points='1 106.237148 106.712464 105.35891 69.9429112 142.128463 1 141.649531' />
                <polygon id='Rectangle-2-Copy-4' fill='#249CD5' points='1 141.649531 70.6500179 141.421356 34.5875721 177.483802 1 177.061914' />
                <polygon id='Rectangle-2-Copy-5' fill='#9D61A4' points='1 177.061914 35.2946789 176.776695 0.646446609 211.424928' />
              </g>
              <path d='M88.263135,101.933356 L88.263135,114.80691 L82.5586862,114.80691 L82.5586862,96.2289077 L101.136688,96.2289077 L101.175232,101.894813 L94.6228245,101.894813 L88.263135,101.933356 Z M124.879897,108.666002 L129.505126,113.29123 L89.9208764,130.134772 L85.2956476,125.509543 L124.879897,108.666002 Z M124.145428,137.815649 L124.183971,131.45596 L124.183971,124.903552 L129.849877,124.942096 L129.849877,143.520098 L111.271874,143.520098 L111.271874,137.815649 L124.145428,137.815649 Z'
              id='Overlay' fill='#FFF' fillRule='nonzero' />
            </g>
          </g>
        </svg>
        <div className="max-w-2xl mx-auto font-sans">
          <div className="px-4">
            <main>{children}</main>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

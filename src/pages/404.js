import React from 'react'
import { graphql } from 'gatsby'
import Home from './index'

const NotFoundPage = props => {
  return <Home {...props} />
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        keywords
      }
    }
  }
`

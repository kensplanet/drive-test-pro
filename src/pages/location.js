import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import SEO from '../components/seo'
import Content from '../components/Location'
import { graphql } from 'gatsby'

const getUrlParameter = (name, search) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export const places = [];

const Location = ({
  data: {
    site: {
      siteMetadata: { title, keywords }
    },
    file
  },
  location
}) => {
  const locale = getUrlParameter('location', location.search) || ''
  const { type } = places.find(({ name }) => name === locale) || {}
  useEffect(() => {
    if (!type) {
      window.location = '/'
    }
  }, [type])
  if (!type) return null

  return (
    <Layout>
      <SEO title={title} keywords={keywords} />
      <Heading
        shorter
        title={
          <>
            {locale}
            <br />
            Rates + Hours
          </>
        }
        fluid={file.childImageSharp.fluid}
      />
      <Content type={type} />
      <div style={{ clear: 'both', marginBottom: '4rem' }} />
    </Layout>
  )
}

export default Location

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        keywords
      }
    }
    file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

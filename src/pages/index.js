import React from 'react'
import { graphql } from 'gatsby'
import 'babel-polyfill'

import Layout from '../components/Layout'
import Services from '../components/Services'
import Locations from '../components/Locations'
import Faq from '../components/Faq'
import HomepageBanner from '../components/HomepageBanner'
import SEO from '../components/seo'
import ExperienceCallout from '../components/ExperienceCallout'

const Home = ({
  data: {
    site: {
      siteMetadata: { title, keywords }
    }
  }
}) => {
  return (
    <Layout homepage>
      <SEO title={title} keywords={keywords} />
      <HomepageBanner />
      <Services />
      <ExperienceCallout />
      <Locations />
      <Faq />
    </Layout>
  )
}

export default Home

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

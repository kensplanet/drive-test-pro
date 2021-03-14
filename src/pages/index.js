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
import Car from "../components/Car";

const Home = ({
  data: {
    site: {
      siteMetadata: { title, keywords }
    }
  }
}) => {
  return (
    <Layout homepage style={{backgroundColor: '#f5f7f9'}}>
      {/*<SEO title={title} keywords={keywords} />*/}
      <Car />
    {/*  <HomepageBanner />*/}
      <Services />
     {/* <ExperienceCallout />*/}
     {/* <Locations />*/}
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

import React from 'react'
import 'babel-polyfill'

import Layout from '../components/Layout'
import Services from '../components/Services'
import Faq from '../components/Faq'
import Car from "../components/Car";
import withDimensions from '../components/Dimensions';
import Logo from "../components/Logo";

const Home = ({isMobile}) => {
  return (
    <Layout homepage style={{backgroundColor: '#f5f7f9'}}>
      {/*<SEO title={title} keywords={keywords} />*/}
        {!isMobile() ? <Car /> : <div style={{ marginTop: '56px'}}>
            <Logo />
        </div>}
    {/*  <HomepageBanner />*/}
      <Services />
     {/* <ExperienceCallout />*/}
     {/* <Locations />*/}
      <Faq />
    </Layout>
  )
}

export default withDimensions(Home)

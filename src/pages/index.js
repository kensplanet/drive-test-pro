import React from 'react'
import 'babel-polyfill'

import Layout from '../components/Layout'
import Services from '../components/Services'
import Faq from '../components/Faq'
import Car from "../components/Car";
import withDimensions from '../components/Dimensions';
import Logo from "../components/Logo";
import Testimonial from "../components/Testimonial";

const Home = ({isMobile}) => {
  return (
    <Layout homepage style={{backgroundColor: '#F5F5F5'}}>
      {/*<SEO title={title} keywords={keywords} />*/}
        {!isMobile() ? <Car /> : <div style={{ marginTop: '56px'}}>
            <Logo />
        </div>}
    {/*  <HomepageBanner />*/}
      <Services />
     {/* <ExperienceCallout />*/}
     {/* <Locations />*/}
        <Testimonial/>
      <Faq />
    </Layout>
  )
};

export default withDimensions(Home)

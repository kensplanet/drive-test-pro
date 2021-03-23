import React from 'react'
import Layout from '../components/Layout'
import WhyUs from '../components/WhyUs'
import Faq from '../components/Faq'
import Car from "../components/Car";
import withDimensions from '../components/Dimensions';
import Logo from "../components/Logo";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

const Home = ({isMobile}) => {
    return (
        <Layout homepage style={{backgroundColor: '#F5F5F5'}}>
            {!isMobile() ? <Car/> : <div style={{marginTop: '56px'}}>
                <Logo/>
            </div>}
            <Services/>
            <Testimonials/>
            <WhyUs/>
            <Faq/>
        </Layout>
    )
};

export default withDimensions(Home)

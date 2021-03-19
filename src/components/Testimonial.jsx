import {TestimonialSection} from 'gatsby-theme-testimonials';
import React from 'react'
import FaqItem from "./FaqItem";
import {SectionText} from "./Section";


const Testimonial = () => {

    return (
        <SectionText anchor heading={'Testimonials'} id={'testimonials'} className={'smaller'}>
            <TestimonialSection/>
        </SectionText>
    )
};


export default Testimonial;
import {TestimonialSection} from 'gatsby-theme-testimonials';
import React from 'react'
import {SectionText} from "./Section";

const Testimonials = () => {

    return (
        <SectionText anchor heading={'Testimonials'} id={'testimonials'} className={'smaller'}>
            <TestimonialSection/>
        </SectionText>
    )
};

export default Testimonials;
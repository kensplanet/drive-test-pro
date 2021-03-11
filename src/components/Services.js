import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SectionText, SectionP } from './Section'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const ServiceList = styled.ul`
  margin-top: 100px;
  overflow: hidden;
`

const ServiceItem = styled.li`
  font-size: 20px;
  color: #555;
  float: left;
  font-weight: 700;
  text-align: center;
  width: 31%;
  height: 200px;
  margin-right: 2%;
  @media only screen and (max-width: 800px) {
    width: 48%;
    margin-right: 2%;
    .text {
      width: 80%;
      margin-left: 10%;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    .text {
      width: 70%;
      margin-left: 15%;
    }
  }
`

const list = [
  'Training Designed for Nervous Adults',
  'Private Lessons',
  'Free Pickup Service',
  'Single Lessons or Discount Packages',
  'Cars Available for MN License Road Test',
  'ESL Experts'
]

export default () => {
  return (
    <SectionText
      anchor
      id={'services'}
      heading={'Services'}
      className={'smaller'}>
      <SectionP>
        Midway Driving School has been the leader in Adult Behind the Wheel
        driver education for over 40 years.
      </SectionP>
      <SectionP>
        Offering private lessons with free pickup service, our patient
        instructors have provided Behind the Wheel driver education and arranged
        Driver License Road tests for thousands of students from all over the
        world.
      </SectionP>
      <ServiceList>
        <StaticQuery
          // TODO: query in more elegant fashion
          query={graphql`
            query {
              img0: file(
                relativePath: {
                  eq: "icon-training-designed-for-nervous-adults.png"
                }
              ) {
                childImageSharp {
                  fluid(maxHeight: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img1: file(relativePath: { eq: "icon-private-lessons.png" }) {
                childImageSharp {
                  fluid(maxHeight: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img2: file(
                relativePath: { eq: "icon-free-pick-up-service.png" }
              ) {
                childImageSharp {
                  fluid(maxHeight: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img3: file(
                relativePath: {
                  eq: "icon-single-lessons-or-discount-packages.png"
                }
              ) {
                childImageSharp {
                  fluid(maxHeight: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img4: file(
                relativePath: {
                  eq: "icon-cars-available-for-mn-license-road-test.png"
                }
              ) {
                childImageSharp {
                  fluid(maxHeight: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img5: file(relativePath: { eq: "icon-esl-experts.png" }) {
                childImageSharp {
                  fluid(maxHeight: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data =>
            list.map((text, i) => {
              return (
                <ServiceItem key={i}>
                  <Fade bottom delay={i * 100}>
                    <div>
                      <Img
                        fluid={data[`img${i}`].childImageSharp.fluid}
                        style={{
                          marginBottom: 20,
                          display: 'inline-block',
                          height: 80,
                          width:
                            data[`img${i}`].childImageSharp.fluid.aspectRatio *
                            80
                        }}
                      />
                      <div className={'text'}>{text}</div>
                    </div>
                  </Fade>
                </ServiceItem>
              )
            })
          }
        />
      </ServiceList>
      <div style={{ display: 'block', clear: 'both' }} />
    </SectionText>
  )
}

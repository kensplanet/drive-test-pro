import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SectionText, SectionP } from './Section'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Logo from "./Logo";

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
  'Private Lessons',
  'Single Lessons or Discount Packages'
]

export default () => {
  return (
    <SectionText
      anchor
      id={'services'}
      heading={'Services'}
      className={'smaller'}>
      <SectionP>
          <div style={{ width: '50%', marginBottom: `1.45rem` }}>
              <Logo />
          </div>
        We provide the best private driving lessons in the city of Ajax.
      </SectionP>
      <ServiceList>
        <StaticQuery
          // TODO: query in more elegant fashion
          query={graphql`
            query {
            
              img0: file(relativePath: { eq: "icon-private-lessons.png" }) {
                childImageSharp {
                  fluid(maxHeight: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            
              img1: file(relativePath: {eq: "icon-single-lessons-or-discount-packages.png"}) { 
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

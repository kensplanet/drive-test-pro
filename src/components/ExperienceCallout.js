import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Section } from './Section'
import { BtnPrimary2 } from './Buttons'
import BackgroundImage from 'gatsby-background-image'

const Image = styled(BackgroundImage)`
  height: 75vh;
  width: 80%;
  background-size: cover;
  background-position: 50% 30%;
  float: right;
  @media screen and (orientation: portrait) {
    width: 100%;
    height: 70vh;
  }
`
const Bg = styled.div`
  background: #f5f5f5;
`
const Container = styled(Section)`
  padding: calc(${props => props.theme.pad} * 2) 0px;
  position: relative;
  @media screen and (orientation: portrait) {
    padding: 0;
    max-width: 100%;
    min-height: 100vh;
    border-top: 15px solid #f5f5f5;
    border-bottom: 15px solid #f5f5f5;
  }
`
const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: 50vh;
  width: 30%;
  padding: calc(${props => props.theme.pad} * 2);
  color: #000;
  font-weight: 500;
  line-height: 1.4;
  font-size: 1.3rem;
  @media screen and (orientation: portrait) {
    width: 100%;
    height: auto;
    display: inline-block;
    position: relative;
  }
  @media only screen and (max-height: 600px) {
    font-size: 1rem;
    height: auto;
  }
`
const TextBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const Btn = styled(BtnPrimary2)`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  @media screen and (orientation: portrait) {
    position: relative;
    margin-top: 2vh;
  }
  @media only screen and (max-height: 600px) {
    position: relative;
    margin-top: 2vh;
  }
`

const ExperienceCallout = () => {
  return (
    <Bg>
      <Container>
        <Inner>
          <StaticQuery
            query={graphql`
              query {
                file(
                  relativePath: { eq: "happy-driving-student-cropped.jpg" }
                ) {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => <Image fluid={data.file.childImageSharp.fluid} />}
          />
          <TextBox>
            <TextBoxInner>
              Thousands of nervous adults have put their trust in our proven
              training program. You will begin to feel confident after your
              first driving lesson.
              <Btn as={'a'} href="tel:612-623-4142">
                Call Today
              </Btn>
            </TextBoxInner>
          </TextBox>
          {/* Clearfix */}
          <div style={{ clear: 'both' }} />
        </Inner>
      </Container>
    </Bg>
  )
}

export default ExperienceCallout

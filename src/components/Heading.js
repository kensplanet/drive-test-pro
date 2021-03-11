import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { SectionText } from '../components/Section'

const H1 = styled.h1`
  font-weight: 700;
  line-height: 1.1;
  font-size: 3.8rem;
  width: 80%;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 800px) {
    font-size: 2rem;
    width: 100%;
  }
`
const Sub = styled.p`
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
`

const Container = styled(BackgroundImage)`
  position: relative;
  min-height: ${props => (props.shorter === true ? '10vw' : '20vw')};
  background-size: cover;
  background-position: 50% 85%;
  color: #fff;
  background-color: #141a18;
  @media only screen and (max-width: 800px) {
    min-height: 10vw;
  }
`

const Heading = ({ title, sub, shorter = false, ...props }) => {
  return (
    <Container {...props} shorter={shorter}>
      <SectionText>
        {title && <H1>{title}</H1>}
        {sub && <Sub>{sub}</Sub>}
      </SectionText>
    </Container>
  )
}

export default Heading

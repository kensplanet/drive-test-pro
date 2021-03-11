import React from 'react'
import styled from 'styled-components'

export const Section = styled.section`
  max-width: 1200px;
  padding: ${props => props.theme.pad};
  margin: 0 auto;
`

const SectionWithText = styled.section`
  max-width: 1200px;
  padding: ${props =>
    props.anchor
      ? `calc(${props.theme.pad} * 6) ${props.theme.pad}`
      : `calc(${props.theme.pad} * 4) ${props.theme.pad}`};
  margin: 0 auto;
  &.smaller {
    max-width: 880px;
  }
  @media only screen and (max-width: 800px) {
    padding: ${props =>
      props.anchor
        ? `
    calc(${props.theme.pad} * 4.5) ${props.theme.pad}
      calc(${props.theme.pad} * 0.5)`
        : `
      calc(${props.theme.pad} * 1.5) ${props.theme.pad}
  `};
  }
`
export const SectionP = styled.p`
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 800px) {
    font-weight: 400;
    font-size: 1.05rem;
    margin-bottom: 1.25rem;
  }
`
const Heading = styled.h1`
  font-size: 48px;
  padding-bottom: 5px;
  display: inline-block;
  color: ${props => props.theme.textHeader};
  border-bottom: 8px solid ${props => props.theme.accent};
  margin-bottom: 50px;
  @media only screen and (max-width: 800px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const SectionText = ({ heading, children, ...props }) => {
  return (
    <SectionWithText {...props}>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </SectionWithText>
  )
}

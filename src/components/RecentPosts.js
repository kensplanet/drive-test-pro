import React from 'react'
import styled from 'styled-components'
import {SectionText} from './Section'
import { StaticQuery, Link, graphql } from 'gatsby'
import { BtnPrimary } from './Buttons'
import Articles from './Articles'

const Bg = styled.div`
  background-color: ${props => props.theme.bodyBgAlt};
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`

const Heading = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.textHeader};
  margin-bottom: calc(${props => props.theme.pad} * 2);
  @media only screen and (max-width: 900px) {
    font-size: 1.3rem;
    margin-bottom: calc(${props => props.theme.pad} / 2);
  }
`
const LinkContainer = styled.div`
  @media only screen and (max-width: 900px) {
    margin-bottom: calc(${props => props.theme.pad} * 2);
  }
`

const RecentPosts = () => {
  return <Bg>
    <SectionText>
      <Header>
        <Heading>Recent Articles</Heading>
        <LinkContainer>
          <Link
            to={'/articles'}
            title={'Midway Driving School Articles'}>
            <BtnPrimary as="span">See all articles</BtnPrimary>
          </Link>
        </LinkContainer>
      </Header>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              limit: 3
              sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `}
        render={data => <Articles data={data} />} />
    </SectionText>
  </Bg>
}

export default RecentPosts
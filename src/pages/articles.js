import React from 'react'
import { graphql } from 'gatsby'
import Articles from '../components/Articles'
import { SectionText } from '../components/Section'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const Bg = styled.div`
  background: linear-gradient(
    ${props => props.theme.bodyBgAlt},
    ${props => props.theme.bodyBg}
  );
`

class Blog extends React.Component {
  render() {
    const title = ''
    const keywords = []
    return (
      <Layout>
        <SEO title={title} keywords={keywords} />
        <Bg>
          <SectionText heading={'Articles'}>
            <Articles data={this.props.data} />
          </SectionText>
        </Bg>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`

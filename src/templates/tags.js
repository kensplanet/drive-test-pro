import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Articles from '../components/Articles'
import {SectionText} from '../components/Section'
import styled from 'styled-components'
import {BtnPrimary} from '../components/Buttons'

const H3 = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 2rem;
`
const Bg = styled.div`
  background: linear-gradient(${props => props.theme.bodyBgAlt}, ${props => props.theme.bodyBg});
`

class Tags extends React.Component {
  render () {
    const { pageContext, data } = this.props
    const { tag } = pageContext
    const { totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

    const title = ""
    const keywords = []
    return (
      <Layout
        title={title}>
        <SEO
          title={title}
          keywords={keywords} />
        <Bg>
          <SectionText heading={'Articles'}>
            <H3>{tagHeader}</H3>
            <Articles data={this.props.data} />
            <Link to="/tags" title={`Midway Driving School - Tags`}>
              <BtnPrimary as={'span'}>See all tags</BtnPrimary>
            </Link>
          </SectionText>
        </Bg>            
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default Tags

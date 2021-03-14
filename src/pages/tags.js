import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {SectionText} from '../components/Section'
import kebabCase from 'lodash/kebabCase'
import {BtnPrimary} from '../components/Buttons'
import styled from 'styled-components'

const Bg = styled.div`
  background: linear-gradient(${props => props.theme.bodyBgAlt}, ${props => props.theme.bodyBg});
`

class Tags extends React.Component {
  render () {
    const title = ""
    const keywords = []
    return (
      <Layout
        title={title}>
        <SEO
          title={title}
          keywords={keywords} />
        <Bg>
          <SectionText heading={'Tags'}>
            <div>
            {this.props.data.allMarkdownRemark.group.map((tag, i) => (
              <span style={{margin: '.2rem .2rem', display: 'inline-block'}}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={i}>
                  <BtnPrimary as={'span'}>{tag.fieldValue} ({tag.totalCount})</BtnPrimary>
                </Link>
              </span>
            ))}
            </div>
          </SectionText>
        </Bg>            
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Tags

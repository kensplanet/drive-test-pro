import React from 'react'
import { Link, graphql } from 'gatsby'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { SectionText } from '../components/Section'
import styled from 'styled-components'
import { BtnSecondary } from '../components/Buttons'

// Putting all styles here so markdown will automatically get them
const Container = styled.div`
  color: ${props => props.theme.textHeader};
  h2,
  h3 {
    font-weight: 700;
    line-height: 1.2;
  }
  a {
    color: ${props => props.theme.accentDark};
    transition: 0.2s;
  }
  a:hover {
    color: ${props => props.theme.accentDarker};
    text-decoration: underline;
  }
  h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.75rem;
    }
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  p,
  li,
  a {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 3rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.2rem;
    }
  }
  ul {
    margin-bottom: 3rem;
    list-style-type: square;
  }
  li {
    margin-bottom: 0.25rem;
    margin-left: 1.5rem;
  }
`

const BlogPostTemplate = ({
  data: {
    location,
    pageContext: { previous, next } = {},
    markdownRemark: post,
    site: {
      siteMetadata: { title: siteTitle }
    },
    file
  }
}) => {
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Heading
        fluid={file.childImageSharp.fluid}
        title={post.frontmatter.title}
        sub={post.frontmatter.date}
      />
      <Container>
        <SectionText>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <p>
            <strong>Be safe, be confident and happy driving!</strong>
            <br />
            -Midway Driving School
            <br />
            <em>“Training designed for nervous adults”</em>
          </p>
          <p style={{ fontSize: '.9rem' }}>Photo by CHEN Dairui on Unsplash</p>
          <div style={{ display: 'block', overflow: 'auto' }}>
            {previous && (
              <Link
                style={{ float: 'left' }}
                to={previous.fields.slug}
                rel="prev">
                <BtnSecondary as={'span'}>← Previous article</BtnSecondary>
              </Link>
            )}
            {next && (
              <Link style={{ float: 'right' }} to={next.fields.slug} rel="next">
                <BtnSecondary as={'span'}>Next article →</BtnSecondary>
              </Link>
            )}
          </div>
        </SectionText>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    file(relativePath: { eq: "chen-dairui-262441-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

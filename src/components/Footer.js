import React from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import styled from 'styled-components'
import {Section} from './Section'
import Img from 'gatsby-image'

const Container = styled.footer`
  background-color: ${props => props.theme.footerBg};
  color: ${props => props.theme.footerColor};
  /* Declaring links here because <Link> is weird :) */
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
  }
  a.accent:link,
  a.accent:visited,
  a.accent:hover,
  a.accent:active {
    color: ${props => props.theme.accent};
  }
  /* Used to obscure email name from scrapers */
  .m:after {
    content: attr(data-n) '@' attr(data-d) '.' attr(data-t);
  }
`
const Logo = styled(Img)`
  width: 100px;
  height: 100px;
  display: inline-block;
  margin-right: calc(${props => props.theme.pad} * 1.5);
  @media only screen and (max-width: 900px) {
    width: 70px;
    height: 70px;
    margin-right: calc(${props => props.theme.pad} * 0.5);
  }
`
const Pad = styled.div`
  padding: ${props => props.theme.pad} 0;
`
const FlexToBlock = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`
const Col1 = styled.div`
  flex: 2;
  @media only screen and (max-width: 900px) {
    margin-bottom: 1rem;
  }
`
const Col2 = styled.div`
  flex: 1;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const Col3 = styled.div`
  flex: 3;
  @media only screen and (max-width: 900px) {
    margin-bottom: 1rem;
  }
`
const SubColumns = styled.div`
  flex: 1;
  @media only screen and (max-width: 900px) {
    margin-bottom: 1rem;
  }
`
const Copyright = styled.p`
  margin-top: 6rem;
  flex: 1;
`
const Tagline = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
`

export default () => {
    return (
        <Container>
            <Pad/>
            <Section>
                <FlexToBlock style={{alignItems: 'flex-end'}}>
                    <Col1>
                    </Col1>
                    <Col2/>
                    <Col3>
                    </Col3>
                </FlexToBlock>
                <Pad/>
                <FlexToBlock>
                    <Col1>
                        <h2>Navigation Links</h2>
                        <ul>
                            <li>
                                <Link to="/#services">Services</Link>
                            </li>
                            <li>
                                <Link to="/#testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <Link to="/#faq">Frequently Asked Questions</Link>
                            </li>
                        </ul>
                    </Col1>
                    <Col2/>
                    <Col3>
                        <h2>Contact</h2>
                        <FlexToBlock as={'ul'}>
                            <SubColumns as={'li'}>
                                Greater Toronto Area
                                <br/>
                                <a href="tel:647-739-1046">(647) 739-1046</a>
                            </SubColumns>
                        </FlexToBlock>
                        <Pad/>
                        <FlexToBlock>
                            <SubColumns>
                                <h2>Helpful Links</h2>
                                <ul>
                                    <li>
                                        <a
                                            target={'_blank'}
                                            rel={'noopener noreferrer'}
                                            href={
                                                'https://www.ontario.ca/document/official-mto-drivers-handbook'
                                            }>
                                            Driver's Handbook - Ontario
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target={'_blank'}
                                            rel={'noopener noreferrer'}
                                            href={
                                                'https://drivetest.ca/book-a-road-test/'
                                            }>
                                            Book a Road Test - Ontario
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target={'_blank'}
                                            rel={'noopener noreferrer'}
                                            href={
                                                'https://www.ontario.ca/page/exchange-out-province-drivers-licence'
                                            }>
                                            Driver's License Information for non-Ontario drivers
                                        </a>
                                    </li>
                                </ul>
                            </SubColumns>
                        </FlexToBlock>
                    </Col3>
                </FlexToBlock>
                <Copyright>
                    Copyright ©{new Date().getFullYear()} Drive Test Pro Driving School All
                    Rights Reserved.
                </Copyright>
            </Section>
        </Container>
    )

}
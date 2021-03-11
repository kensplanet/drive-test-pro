import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import 'intersection-observer'
import styled from 'styled-components'
import { Section } from './Section'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import horizontalLogo from '../assets/midway-driving-school-logo-horizontal.png'
import Hamburger from './Hamburger'

const Container = styled(Section)`
  height: 150px;
`
const MobileContainer = styled.div`
  border-bottom: 1px solid #ccc;
  height: 60px;
  position: sticky;
  z-index: 1000;
  top: 0px;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  div ul li {
    margin: 0px;
    padding: 0px;
  }
  ul li a.phone {
    display: inline-block;
  }
`
const LogoContainer = styled.div`
  font-size: 0;
  line-height: 0;
  left: 0;
  width: 104px;
  height: 69px;
  @media only screen and (max-width: 900px) {
    width: 45px;
    height: 30px;
  }
`

const Nav = styled.nav`
  margin: auto 0 auto auto;
  font-size: 1.125rem;
  font-weight: 700;
  right: 0;
  ul li {
    float: left;
    margin-right: 5px;
    padding: 0px 15px;
    transition: 0.17s;
  }
  ul li:last-of-type {
    margin-right: 0;
    padding-right: 0;
  }
  li a {
    padding: 9px 0;
    cursor: pointer;
    position: relative;
    color: ${(props) => props.theme.linkAlt};
    :after {
      content: '';
      transition: 0.15s;
      height: 4px;
      width: 0;
      background-color: ${(props) => props.theme.accent};
      left: 50%;
      bottom: -3px;
      transform: translateX(-50%);
      position: absolute;
    }
    :hover:after {
      width: 100%;
    }
  }
  li a.phone {
    white-space: no-wrap;
    color: #fff;
    transition: 0.2s;
    background-color: ${(props) => props.theme.accentDark};
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    :hover {
      color: #fff;
      background-color: ${(props) => props.theme.accentDarker};
    }
    :hover:after {
      display: none;
    }
  }
`
const StickyHeader = styled.div`
  width: 100%;
  height: 57px;
  background-color: #fff;
  position: sticky;
  z-index: 1000;
  top: 0px;
  margin-top: -60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  transition: 0.15s;
`
const MobileDrawer = styled.div`
  position: absolute;
  text-align: center;
  background: #fff;
  transition: transform 0.2s;
  z-index: -1;
  ul {
    display: block;
  }
  li {
    display: block;
  }
  li a {
    padding: 12px 0px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 9px;
    display: block;
    border-radius: 7px;
    color: #333;
    background: #efefef;
  }
`

const PhoneIcon = ({ style = {} }) => {
  return (
    <svg viewBox="0 0 333 416.25" style={style}>
      <path
        style={{ fill: 'currentColor' }}
        d="M32 60c30,-46 54,-66 81,-5 19,43 16,43 -13,70 -20,19 8,49 32,75 24,25 52,56 73,37 29,-27 29,-30 70,-8 60,32 37,53 -10,80 -95,50 -289,-158 -233,-249zm220 109c-4,15 -27,9 -23,-6 9,-30 -23,-64 -53,-58 -15,4 -20,-20 -5,-23 48,-10 95,40 81,87zm53 17c-2,15 -26,13 -24,-3 8,-70 -52,-133 -122,-131 -16,1 -17,-23 -1,-24 84,-3 156,74 147,158z"
      />
    </svg>
  )
}
const PhoneNumber = () => {
  return (
    <a
      className="phone"
      href="tel:612-623-4142"
      style={{ position: 'relative', paddingLeft: '43px' }}>
      <PhoneIcon
        style={{
          position: 'absolute',
          margin: 0,
          left: 13,
          padding: 0,
          width: 25,
          height: 25,
          display: 'inline-block'
        }}
      />
      <span>Call (612) 623-4142</span>
    </a>
  )
}

const WebNav = () => {
  return (
    <ul>
      <li>
        <Link to="/#services">Services</Link>
      </li>
      <li>
        <Link to="/#locations">Locations, Rates, and Hours</Link>
      </li>
      <li>
        <Link to="/#faq">FAQ</Link>
      </li>
      <li>
        <PhoneNumber />
      </li>
    </ul>
  )
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <MobileContainer as={'header'} className={'mobile'}>
      <div style={{ padding: '0px 20px', height: '100%', background: '#fff' }}>
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
          <MainLogo />
          <Nav className={'mobile pos-center-vert'}>
            <ul>
              <li style={{ marginRight: '13px' }}>
                <PhoneNumber />
              </li>
              <li>
                <Hamburger
                  showClose={openMenu}
                  onClick={() => {
                    setOpenMenu(!openMenu)
                  }}
                />
              </li>
            </ul>
          </Nav>
        </div>
      </div>
      <MobileDrawer
        style={{
          position: 'absolute',
          left: 0,
          top: '100%',
          width: '100%',
          boxShadow: openMenu ? '0px 2px 2px rgba(0, 0, 0, 0.3)' : '',
          pointerEvents: openMenu ? '' : 'none',
          transform: openMenu ? 'translateY(0)' : 'translateY(-100%)'
        }}>
        <Section>
          <ul>
            <li>
              <Link to="/#services" onClick={() => setOpenMenu(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/#locations" onClick={() => setOpenMenu(false)}>
                Locations, Rates, and Hours
              </Link>
            </li>
            <li>
              <Link to="/#faq" onClick={() => setOpenMenu(false)}>
                FAQ
              </Link>
            </li>
          </ul>
        </Section>
      </MobileDrawer>
    </MobileContainer>
  )
}

const MainLogo = () => {
  return (
    <LogoContainer className={'pos-center-vert'}>
      <Link
        className={'pos-full'}
        to={'/'}
        title={'Midway Driving School Homepage'}>
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "midway-driving-school-logo.png" }) {
                childImageSharp {
                  fluid(maxWidth: 104) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={(data) => (
            <Img
              className={'pos-full'}
              fluid={data.file.childImageSharp.fluid}
              alt={'Midway Driving School'}
            />
          )}
        />
      </Link>
    </LogoContainer>
  )
}

const COVIDBanner = styled.div`
  display: flex;
  min-height: 45px;
  padding: 10px;
  line-height: 1.15;

  background: ${(props) => props.theme.accentDarker};
  color: #fff;
  font-size: 15px;
  position: relative;
  z-index: 10000;
  align-items: center;
  justify-content: center;
`

export default ({}) => {
  const navId = 'web-nav'
  const [isSticky, setIsSticky] = useState(false) // actually get the position FIRST!
  useEffect(() => {
    let elem = document.getElementById(navId)
    let observer
    let callback = (entries) => {
      const [{ isIntersecting }] = entries
      const currIsSticky = !isIntersecting
      if (currIsSticky !== isSticky) setIsSticky(currIsSticky)
    }
    if (elem) {
      observer = new IntersectionObserver(callback, {
        rootMargin: '0px',
        threshold: [0, 1]
      })
      observer.observe(elem)
    }
    return () => {
      if (elem) {
        elem = null
        // No need to remove observer since we always need it?
      }
    }
  }, [isSticky, setIsSticky])
  return (
    <>
      <COVIDBanner>
        <span
          style={{
            textAlign: 'center',
            flex: '0 0 160px',
            padding: '8px 10px',
            background: 'rgba(0,0,0,.3)',
            marginRight: '10px',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>
          COVID-19 Update
        </span>
        <span style={{ textAlign: 'left' }}>
          We are unable to book lessons at this time. We are sorry for any
          inconvenience. Please check back after April 1st.
        </span>
      </COVIDBanner>
      {/* Mobile */}
      <MobileNav />
      {/* Web */}
      <Container as={'header'} className={'mobile-none'} id={navId}>
        <div className={'pos-full'} style={{ position: 'relative' }}>
          <MainLogo />
          <MobileNav />
          <Nav className={'mobile-none pos-center-vert'}>
            <WebNav />
          </Nav>
        </div>
      </Container>
      <StickyHeader
        className={'mobile-none'}
        style={{
          opacity: isSticky ? 1 : 0,
          transform: isSticky ? 'translateY(0%)' : 'translateY(-20%)'
        }}>
        <Section style={{ paddingTop: 17 }}>
          <Link to={'/'} title={'Midway Driving School Homepage'}>
            <img
              src={horizontalLogo}
              alt={'Midway Driving School'}
              style={{ height: 21 }}
            />
          </Link>
          <Nav className={'mobile-none'} style={{ float: 'right' }}>
            <WebNav />
          </Nav>
        </Section>
      </StickyHeader>
    </>
  )
}

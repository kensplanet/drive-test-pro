import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SectionText, SectionP } from './Section'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Logo from "./Logo";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCarSide, faUserCheck} from '@fortawesome/free-solid-svg-icons'
import CustomizedTimeline from "./Features";

const ServiceList = styled.ul`
  overflow: hidden;
`;

const ServiceItem = styled.li`
  font-size: 20px;
  color: #555;
  float: left;
  font-weight: 700;
  text-align: center;
  height: 200px;
  margin-right: 2%;
`;

const list = [
  'Private Lessons',
  'Single Lessons or Discount Packages'
];

export default () => {
  return (
    <SectionText
      anchor
      id={'services'}
      heading={'About Us'}
      className={'smaller'}>
        <CustomizedTimeline/>

      <div style={{ display: 'block', clear: 'both' }} />
    </SectionText>
  )
}

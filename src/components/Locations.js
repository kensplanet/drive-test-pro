import React from 'react'
import { Link } from 'gatsby'
import { SectionText, SectionP } from './Section'
import styled from 'styled-components'
import { places } from '../pages/location'

const LinkTele = styled.a`
  cursor: pointer;
  color: #36a6f7;
  text-decoration: underline !important;
  transition: 0.2s;
  :hover {
    color: #1c8bdb;
  }
`
const LocationLink = styled(Link)`
  display: block;
  cursor: pointer;
  color: #36a6f7;
  position: relative;
  padding-bottom: 2px;
  font-weight: 400;
  font-size: 22px;
  transition: 0.2s;
  :hover {
    color: #555;
    font-weight: 700;
  }
`
const Header = styled(SectionP)`
  margin-bottom: 2rem;
  font-weight: 700;
  color: #000;
`

const Columns = styled.div`
  columns: 4;
  @media only screen and (max-width: 900px) {
    columns: 3;
  }
  @media only screen and (max-width: 750px) {
    columns: 2;
  }
  @media only screen and (max-width: 600px) {
    columns: 1;
  }
`

export default () => {
  return (
    <SectionText
      id={'locations'}
      anchor
      heading={'Locations'}
      className={'smaller'}>
      <SectionP>
        Free pickup is available for most of the Twin City, Duluth and Rochester
        metro areas. If you have passed the Minnesota Instruction Permit
        (Knowledge Test) and you want to schedule an appointment,{' '}
        <LinkTele href={'tel:612-623-4142'}>call us at (612) 623-4142</LinkTele>
        . It takes just a minute to arrange a convenient time for your first
        driving lesson.
      </SectionP>
      <SectionP>
        Our experienced instructors have each trained hundreds of nervous
        adults. They are very helpful, and will quickly prepare you for your
        Minnesota License Road Test in our driving school training car.
      </SectionP>
      <Header as={'h3'}>Click on your city for rates and hours</Header>
      <Columns>
        <ul>
          {places.map(({ name }, i) => {
            return (
              <li key={i}>
                <LocationLink to={`/location?location=${name}`}>
                  {name}
                </LocationLink>
              </li>
            )
          })}
        </ul>
      </Columns>
    </SectionText>
  )
}

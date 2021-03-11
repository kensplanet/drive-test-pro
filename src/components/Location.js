import React from 'react'
import { SectionText } from './Section'
import styled from 'styled-components'

const Col = styled.div`
  width: 58%;
  margin-right: 7%;
  float: left;
  @media only screen and (max-width: 800px) {
    display: block;
    width: 100%;
  }
`
const Col2 = styled.div`
  width: 35%;
  float: left;
  @media only screen and (max-width: 800px) {
    margin-top: 0.5rem;
    display: block;
    width: 100%;
  }
`
const Container = styled.div`
  color: ${props => props.theme.textHeader};
  h2,
  h3 {
    font-weight: 700;
    line-height: 1.2;
  }
  a {
    display: block;
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${props => props.theme.accentDark};
    transition: 0.2s;
    font-weight: 700;
  }
  a:hover {
    color: ${props => props.theme.accentDarker};
    text-decoration: underline;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 800px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }

  table {
    border-collapse: collapse;
    font-weight: 400;
    width: 100%;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    @media only screen and (max-width: 800px) {
      font-size: 1rem;
    }
  }
  table.price {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 800px) {
      width: calc(100% + 40px);
      margin-left: -20px;
      margin-right: -20px;
    }
  }
  table.price td {
    vertical-align: top;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.4rem 1rem;
    @media only screen and (max-width: 800px) {
      padding: 1.4rem 20px;
    }
  }
  table.price tr:nth-of-type(even) {
    background-color: #f7f7f7;
  }
  table.hours {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    border-top: 1px dotted rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 800px) {
      font-size: 1rem;
    }
  }
  table.hours td {
    padding: 0.5rem 0rem;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.1);
  }
  table.hours td:nth-of-type(even) {
    text-align: right;
  }
  .note {
    line-height: 1.3;
  }
`

const rates = {
  main: [
    { elem: '2 Hour Lessons', price: '$175.00' },
    { elem: '6 Hour Behind the Wheel Package', price: '$510.00' },
    { elem: '7½ Hour Package including Road Test', price: '$575.00' },
    {
      elem: (
        <div>
          <div style={{ marginBottom: '.5rem' }}>
            3&#189; Hour Road Test Appointment*
          </div>
          <div className="note">
            <strong>*</strong> Students must take at least one lesson before
            scheduling a Road Test appointment.
          </div>
        </div>
      ),
      price: '$265.00'
    }
  ],
  outter: [
    { elem: '2 Hour Lessons', price: '$185.00' },
    { elem: '6 Hour Behind the Wheel Package', price: '$540.00' },
    { elem: '7½ Hour Package including Road Test', price: '$605.00' },
    {
      elem: (
        <div>
          <div style={{ marginBottom: '.5rem' }}>
            3&#189; Hour Road Test Appointment*
          </div>
          <div className="note">
            <strong>*</strong> Students must take at least one lesson before
            scheduling a Road Test appointment.
          </div>
        </div>
      ),
      price: '$275.00'
    }
  ]
}

export default ({ type = 'main' }) => {
  return (
    <SectionText>
      <Container>
        <div>
          <Col>
            <h2>Rates</h2>
            <table className="price">
              <tbody>
                {rates[type].map(({ elem, price }, i) => {
                  return (
                    <tr key={i}>
                      <td>{elem}</td>
                      <td>{price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>
          <Col2>
            <h2>Hours</h2>
            <h3>Behind the Wheel Lessons</h3>
            <table className="hours">
              <tbody>
                <tr>
                  <td>Monday-Thursday</td>
                  <td>7am–8pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>7am–5pm</td>
                </tr>
              </tbody>
            </table>
            <h3>Office hours</h3>
            <h5>
              <a href="tel:612-623-4142">Call (612) 623-4142</a>
            </h5>
            <table className="hours">
              <tbody>
                <tr>
                  <td>Monday-Thursday</td>
                  <td>9:30am–4:30pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9:30am–4:00pm</td>
                </tr>
                <tr>
                  <td>Saturday, Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </Col2>
        </div>
      </Container>
    </SectionText>
  )
}

import React from 'react'
import { SectionText } from './Section'
import styled from 'styled-components'
import FaqItem from './FaqItem'

const Dl = styled.dl`
  color: #000;
  font-weight: 500;
  font-size: 1.4rem;
  border-bottom: 1px solid #000;
  line-height: 1.4;
  a {
    color: ${props => props.theme.accentDark};
    text-decoration: underline;
  }
`

const faqs = [
  {
    question:
      'Is Drive Test Pro the best school in Ajax?',
    answer:
      'Yes it is the BEST.'
  }
];

export default () => {
  return (
    <SectionText anchor heading={'FAQ'} id={'faq'} className={'smaller'}>
      <Dl>
        {faqs.map((props, i) => {
          return <FaqItem {...props} key={i} />
        })}
      </Dl>
    </SectionText>
  )
}

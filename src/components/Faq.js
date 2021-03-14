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
      'What do I need before I can start having driving lessons with Drive Test Pro?',
    answer:
      'You must have a G1 or G2. You can register on line or over the phone or come\n' +
        '\n' +
        'to the office saturday or sunday from 9am to 2:15pm.'
  },
    {
        question:
            'How much discount will I get on my insurance with the certificate?',
        answer:
            'Our students are saving up to 41% annually, may vary depending insurance companies, your age, type of the car, your driving record etc.'
    },
    {
        question:
            'How will I know if i\'m ready to take my driving exam?',
        answer:
            'Your instructor will give you a mock driving test, and advise you accordingly. Students ready for the driving test should be able to drive consistently well and with confidence – without assistance and guidance. Ninety per cent of test failures are due to inexperience in traffic.'
    },
    {
        question:
            'What is the current waiting time for practical driving test appointments?',
        answer:
            'This depends on where you live in. In some areas, it’s only 3 weeks to 4 weeks.'
    },
    {
        question:
            'What is the current fee for practical driving test?',
        answer:
            'Class G2 road test $50 -Class G road test $85 payable to the Ministry Of Transportation.'
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

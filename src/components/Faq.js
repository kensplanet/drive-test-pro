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
      'I am a really anxious driver. Will Midway Driving School be a good fit for me?',
    answer:
      'Being a nervous or anxious driver is not a problem. Midway Driving School will be a great fit for you because we have more than 40 years of experience training nervous drivers. Most everyone is nervous at first when driving. You’ll be surprised how quickly you get through this phase, and we can help you become a confident driver.'
  },
  {
    question:
      'Should I set up a Road Test appointment with Minnesota Department of Motor Vehicles before starting at Midway?',
    answer:
      'No, not at all! Ask us, and we can schedule that appointment for you.'
  },
  {
    question: 'I don’t have my permit yet, where do I go to get one?',
    answer: (
      <div>
        We’re here to help! Just{' '}
        <a
          href="tel:612-623-4142"
          onClick={e => {
            e.stopPropagation()
          }}>
          call us
        </a>{' '}
        and we can help locate the closest exam station to your house or work.
      </div>
    )
  },
  {
    question: "Where can I find the Minnesota Driver's Manual?",
    answer: (
      <span>
        Here is a link to the{' '}
        <a
          target={'_blank'}
          rel={'noopener noreferrer'}
          href={
            'https://dps.mn.gov/divisions/dvs/forms-documents/Documents/Minnesota_Drivers_Manual.pdf'
          }>
          Minnesota Driver's Manual (PDF).
        </a>
      </span>
    )
  },
  {
    question: 'What is the best package for training a new driver?',
    answer:
      'Once you have completed your first lesson, your instructor will let you know after which package will help prepare you the best for the Road Test. In most cases, the 7½ hr package is perfect for covering everything you need to know for the Road Test.'
  },
  {
    question:
      'How long do I need to wait to take my license test after I get my permit?',
    answer:
      'For 19 years of age and older, you can take your Road Test three months after your permit. For 19 years of age and younger, it is a six month wait. If you have had a permit from another state or country, the Minnesota DMV will waive the waiting period and you can take your license test immediately.'
  },
  {
    question:
      'What if I just need to practice parking? Can I schedule a lesson just for that?',
    answer:
      'Of course! Driving students can schedule lessons to work on particular skills.'
  }
]

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

import React, { useState } from 'react'
import styled from 'styled-components'
import { TweenMax } from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

const Container = styled.div`
  cursor: pointer;
  line-height: 1.4;
`
const Dt = styled.dt`
  font-size: 1.4rem;
  border-top: 1px solid #000;
  padding: 2rem 80px 1.5rem 0px;
  position: relative;
`
const Dd = styled.dd`
  font-weight: 400;
  font-size: 1.4rem;
  padding-right: 20px;
  overflow: hidden;
`
const circleLength = 36
const plusLength = 22
const ExpandIcon = styled.div`
  width: ${circleLength}px;
  height: ${circleLength}px;
  position: absolute;
  right: 15px;
  top: 20px;
  color: #000;
  border-radius: 100%;
  transition: 0.2s;
  ${Container}:hover & {
    background-color: #333;
    color: #fff;
  }
  ::before,
  ::after {
    content: '';
    border-radius: 2px;
    background-color: currentColor;
    position: absolute;
    transform-origin: center;
  }
  ::before {
    width: 2px;
    height: ${plusLength}px;
    top: ${(circleLength - plusLength) / 2}px;
    left: 50%;
    margin-left: -1px;
    transition: transform 0.2s ease-in-out, opacity 0.2s;
    ${props => (props.open ? 'transform: rotate(90deg); opacity: 0;' : '')}
  }
  ::after {
    width: ${plusLength}px;
    height: 2px;
    top: 50%;
    left: ${(circleLength - plusLength) / 2}px;
    margin-top: -1px;
  }
`

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  return (
    <Container
      onClick={() => {
        setOpen(prev => !prev)
      }}>
      <Dt>
        <div>{question}</div>
        <ExpandIcon open={open} />
      </Dt>
      <Transition
        in={open}
        appear
        mountOnEnter
        unmountOnExit
        addEndListener={(node, done) => {
          TweenMax.fromTo(
            // eslint-disable-line
            node,
            0.1,
            {
              opacity: open ? 0 : 1,
              height: open ? 0 : 'auto',
              paddingBottom: open ? 0 : '2rem'
            },
            {
              opacity: open ? 1 : 0,
              height: open ? 'auto' : 0,
              paddingBottom: open ? '2rem' : 0,
              onComplete: function() {
                done()
              }
            }
          )
        }}>
        <Dd>{answer}</Dd>
      </Transition>
    </Container>
  )
}

export default FaqItem

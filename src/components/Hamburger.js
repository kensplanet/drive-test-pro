import React from 'react'
import styled, { keyframes } from 'styled-components'

const lineColor = '#777'

const dur = 0.3
const Container = styled.button`
  :focus {
    outline: none;
  }
  display: inline-block;
  position: relative;
  pointer-events: all;
  width: 43px;
  height: 39px;
  top: 0;
  right: 0;
  background: #efefef;
  border-radius: 4px;
  border: 1px solid ${lineColor};
  transition: 0.2s;
`

const topLine = keyframes`
  0% {
    transform: translateY(7px) rotate(0deg);
    background: ${lineColor};
  }
  49% {
    transform: translateY(0vmin) rotate(0deg);
    background: ${lineColor};
  }
  50% {
    transform: translateY(0vmin) rotate(0deg);
    background: ${lineColor};
  }
  100% {
    transform: translateY(0vmin) rotate(45deg);
    background: ${lineColor};
  }
`
const bottomLine = keyframes`
  0% {
    transform: translateY(-7px) rotate(0deg);
    background: ${lineColor};
  }
  49% {
    transform: translateY(0vmin) rotate(0deg);
    background: ${lineColor};
  }
  50% {
    transform: translateY(0vmin) rotate(0deg);
    background: ${lineColor};
  }
  100% {
    transform: translateY(0vmin) rotate(-45deg);
    background: ${lineColor};
  }
`
const middleLine = keyframes`
  0% {
    transform: scaleX(1);
    background: ${lineColor};
  }
  49% {
    transform: scaleX(1);
    background: ${lineColor};
  }
  50% {
    transform: scaleX(1);
    background: ${lineColor};
  }
  100% {
    transform: scaleX(0);
    background: ${lineColor};
  }
`

const LineContainer = styled.div`
  width: 68%;
  height: 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 0.3s;
  transform-origin: center;
  animation-timing-function: ease-in-out;
  animation-duration: ${dur}s;
  animation-fill-mode: both;
  background: ${lineColor};
`

const Line1 = styled(Line)`
  animation-name: ${topLine};
`
const Line2 = styled(Line)`
  animation-name: ${middleLine};
`
const Line3 = styled(Line)`
  animation-name: ${bottomLine};
`

const Hamburger = ({ showClose, ...props }) => {
  const lineProps = {
    style: { animationDirection: showClose ? 'normal' : 'reverse' }
  }
  return (
    <Container {...props}>
      <LineContainer>
        <Line1 {...lineProps} key={'1' + showClose} />
        <Line2 {...lineProps} key={'2' + showClose} />
        <Line3 {...lineProps} key={'3' + showClose} />
      </LineContainer>
    </Container>
  )
}

export default Hamburger

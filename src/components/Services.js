import React from 'react'
import CustomizedTimeline from "./Features";
import { SectionText, SectionP } from './Section'

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

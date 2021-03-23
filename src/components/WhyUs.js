import React from 'react'
import CustomizedTimeline from "./Features";
import { SectionText} from './Section'

export default () => {
  return (
    <SectionText
      anchor
      heading={'Why Us?'}
      className={'smaller'}>
        <CustomizedTimeline/>
    </SectionText>
  )
}

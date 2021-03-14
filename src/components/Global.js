import {createGlobalStyle} from 'styled-components'
import GlobalReset from './GlobalReset'
import GlobalUtils from './GlobalUtils'
import GlobalVars from './GlobalVars'

// TODO: polyfill for css vars
export default createGlobalStyle`
  ${GlobalReset}
  ${GlobalUtils}
  ${props => GlobalVars(props.theme, props.homepage)}
`
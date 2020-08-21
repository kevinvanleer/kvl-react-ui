import styled from 'styled-components'
import { Flexbox } from './Flexbox.js'

const Spacer = styled(Flexbox).attrs({ className: 'kvl-spacer' })`
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`

export { Spacer }

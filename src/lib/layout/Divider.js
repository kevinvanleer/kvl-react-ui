import styled from 'styled-components'
import { Flexbox } from './Flexbox.js'
import { get } from 'lodash'

export const Divider = styled(Flexbox).attrs({ className: 'kvl-divider' })`
  border-bottom: ${(props) =>
    props.horizontal &&
    `1px solid ${get(props, 'theme.colors.borders', '#777')};`};
  border-right: ${(props) =>
    props.vertical &&
    `1px solid ${get(props, 'theme.colors.borders', '#777')};`};
`

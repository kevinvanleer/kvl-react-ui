import styled from 'styled-components'
import Color from 'color'
import { get } from 'lodash'

import { Clickable as CoreClickable } from '../core/Clickable'

export const Button = styled(CoreClickable)`
  border: none;
  font: inherit;
  font-family: ${(props) => get(props, 'theme.type.face.normal')};
  font-size: ${(props) => get(props, 'theme.type.height.button')};
  cursor: pointer;
  outline: inherit;
  align-items: center;
  text-align: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: ${(props) =>
    Color(props.theme.colors.vantage.normal.background).alpha(0.7).string()};
  color: ${(props) => props.theme.colors.vantage.normal.font};
  -webkit-text-fill-color: ${(props) => props.theme.colors.vantage.normal.font};
  border-radius: ${(props) => props.theme.borders.radius};
  padding: 1em 2em;

  ${({ disabled, theme }) =>
    disabled
      ? `
    background-color: ${Color(get(theme, 'colors.vantage.normal.background'))
      .darken(0.5)
      .string()};
  `
      : `
  &:hover {
    background-color: ${get(theme, 'colors.vantage.normal.background')};
  }
  &:active {
    background-color: ${Color(get(theme, 'colors.vantage.normal.background'))
      .darken(0.5)
      .string()};
  }`}
`

import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import { get } from 'lodash'

import { Clickable } from '../core/Clickable'
import { Spacer } from '../layout/Spacer.js'
import { Flexbox } from '../layout/Flexbox.js'

export const SquareButton = styled(({ className, children, ...props }) => (
  <Clickable className={`kvl-square-button ${className}`} {...props}>
    <Flexbox justifyContent='center' alignItems='center'>
      <Spacer marginTop='100%' />
      <Flexbox>{children}</Flexbox>
    </Flexbox>
  </Clickable>
))`
  border: none;
  font: inherit;
  font-family: ${(props) => get(props, 'theme.type.face.normal')};
  font-size: ${(props) => get(props, 'theme.type.height.button')};
  cursor: pointer;
  outline: inherit;
  align-items: center;
  text-align: center;
  min-height: 2em;
  min-width: 2em;

  background-color: ${(props) =>
    Color(
      get(
        props,
        'theme.colors.vantage.normal.background',
        props.backgroundColor
      )
    )
      .alpha(0.7)
      .string()};
  color: ${(props) =>
    get(props, 'theme.colors.primary.normal.font', props.color)};
  border-radius: ${(props) => get(props, 'theme.borders.radius')};
  padding: 0.5em 0.5em;

  ${({ disabled, theme }) =>
    disabled
      ? `
  cursor: not-allowed;
    background-color: ${Color(
      get(theme, 'colors.vantage.normal.background', '#777')
    )
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

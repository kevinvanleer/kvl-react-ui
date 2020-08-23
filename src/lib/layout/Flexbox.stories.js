import React from 'react'
import { Flexbox } from './Flexbox.js'
import styled from 'styled-components'

export default {
  component: Flexbox,
  title: 'Flexbox'
}

const Box = styled.div`
  background-color: black;
  height: 1em;
  width: 1em;
  min-height: 1em;
  min-width: 1em;
  max-height: 1em;
  max-width: 1em;
  border: 0.1em solid #0f0;
`
export const Default = () => (
  <Flexbox>
    {Array.from(Array(16).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const Row = () => (
  <Flexbox flexDirection='row'>
    {Array.from(Array(4).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const MarginBetween = () => (
  <Flexbox marginBetween='1em'>
    {Array.from(Array(4).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const Wrapped = () => (
  <Flexbox flexWrap='wrap'>
    {Array.from(Array(100).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const WrappedWithGutter = () => (
  <Flexbox flexWrap='wrap' wrapMargin='0.5em'>
    {Array.from(Array(100).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const Column = () => (
  <Flexbox flexDirection='column'>
    {Array.from(Array(4).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const MarginBetweenColumn = () => (
  <Flexbox marginBetween='1em' flexDirection='column'>
    {Array.from(Array(4).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const WrappedColumn = () => (
  <Flexbox maxHeight='100vh' flexWrap='wrap' flexDirection='column'>
    {Array.from(Array(100).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)
export const WrappedWithGutterColumn = () => (
  <Flexbox
    maxHeight='100vh'
    flexWrap='wrap'
    wrapMargin='0.5em'
    flexDirection='column'
  >
    {Array.from(Array(100).keys()).map((key) => (
      <Box key={key} />
    ))}
  </Flexbox>
)

import React from 'react'
import { Popup } from './Popup.js'
import styled from 'styled-components'

export default {
  component: Popup,
  title: 'Popup'
}

const Box = styled.div`
  background-color: black;
  height: 1em;
  width: 1em;
  min-height: 5em;
  min-width: 5em;
  max-height: 5em;
  max-width: 5em;
  border: 0.1em solid #0f0;
`
export const Default = () => (
  <Popup>
    <Box />
  </Popup>
)
export const Shift = () => (
  <Popup top='50px' left='50px'>
    <Box />
  </Popup>
)
export const BottomOccluded = () => (
  <div id='kvl-test-occluding'>
    <Popup
      occludingContainerId='kvl-test-occluding'
      top='calc(100% - 2em)'
      left='50px'
      bottomOccluded='1em'
    >
      <Box />
    </Popup>
  </div>
)
export const LeftOccluded = () => (
  <div id='kvl-test-occluding'>
    <Popup
      occludingContainerId='kvl-test-occluding'
      right='calc(100% - 2em)'
      top='50px'
      leftOccluded='1em'
    >
      <Box />
    </Popup>
  </div>
)
export const BottomRightOccluded = () => (
  <div id='kvl-test-occluding'>
    <Popup
      top='calc(100% - 2em)'
      left='calc(100% - 2em)'
      bottomOccluded='1em'
      rightOccluded='1em'
      topOccluded='1em'
      leftOccluded='1em'
    >
      <Box />
    </Popup>
  </div>
)

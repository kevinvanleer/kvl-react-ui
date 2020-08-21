import React from 'react'
import { ToggleButton } from './ToggleButton'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  component: ToggleButton,
  title: 'ToggleButton'
}

export const Default = () => (
  <ToggleButton
    iconTrue={faChevronUp}
    iconFalse={faChevronDown}
    value={false}
  />
)
export const False = () => (
  <ToggleButton
    iconTrue={faChevronUp}
    iconFalse={faChevronDown}
    value={false}
  />
)
export const True = () => (
  <ToggleButton iconTrue={faChevronUp} iconFalse={faChevronDown} value />
)

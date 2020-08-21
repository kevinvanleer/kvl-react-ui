import React from 'react'
import { Icon } from './Icon'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  component: Icon,
  title: 'Icon'
}

export const Default = () => <Icon />
export const ChevronUp = () => <Icon icon={faChevronUp} />
export const ChevronDown = () => <Icon icon={faChevronDown} />
export const UserSize = () => <Icon icon={faChevronDown} size='10x' />

import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export * as layout from './layout'
export * as presentation from './presentation'
export * as core from './core'

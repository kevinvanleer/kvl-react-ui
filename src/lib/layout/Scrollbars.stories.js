import React from 'react'
import { Scrollbars } from './Scrollbars.js'

export default {
  component: Scrollbars,
  title: 'Scrollbars'
}

export const Vertical = () => (
  <div style={{ height: '400px' }}>
    <Scrollbars>
      <div
        style={{
          height: '800px',
          background:
            'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
        }}
      />
    </Scrollbars>
  </div>
)

export const Horizontal = () => (
  <div style={{ width: '400px', height: '400px' }}>
    <Scrollbars>
      <div
        style={{
          width: '800px',
          height: '400px',
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
        }}
      />
    </Scrollbars>
  </div>
)

export const HorizontalAndVertical = () => (
  <div style={{ width: '400px', height: '400px' }}>
    <Scrollbars>
      <div
        style={{
          width: '800px',
          height: '800px',
          background:
            'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
        }}
      />
    </Scrollbars>
  </div>
)

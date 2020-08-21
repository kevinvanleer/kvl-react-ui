import React from 'react'

export const removeProps = (Component, blacklist) => {
  const RemoveProps = ({ ...props }) => {
    const passedProps = Object.assign({}, props)
    for (const prop in blacklist) {
      delete passedProps[prop]
    }
    return <Component {...passedProps} />
  }

  RemoveProps.disaplyName = `RemoveProps(${
    Component.displayName || Component.name || 'Component'
  })`

  return RemoveProps
}

export default removeProps

import React from 'react';

export const removeProps = (Component, blacklist) => {
  const RemoveProps = ({ ...props }) => {
    let passedProps = Object.assign({}, props);
    for (let prop in blacklist) {
      delete passedProps[prop];
    }
    return <Component {...passedProps} />;
  };

  RemoveProps.disaplyName = `RemoveProps(${Component.displayName ||
    Component.name ||
    'Component'})`;

  return RemoveProps;
};

export default removeProps;

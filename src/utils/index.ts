import React from 'react';

export const styledInjector = (
  children: React.ReactNode,
  className: string
) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className} ${className}`,
    });
  }
};

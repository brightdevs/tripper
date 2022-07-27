import React from 'react';
import { IsearchForm } from '../interfaces';
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

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearchForm: React.Dispatch<React.SetStateAction<IsearchForm>>
) => {
  const { name, value } = e.target;
  setSearchForm((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

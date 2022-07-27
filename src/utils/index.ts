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

export const handleFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  formRef: React.RefObject<HTMLFormElement>
) => {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement).entries();
  const dataForm: {
    [key: string]: FormDataEntryValue;
  } = {};
  for (const [key, value] of data) {
    dataForm[key] = value;
  }
  formRef.current?.reset();
};

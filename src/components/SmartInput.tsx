import React from 'react';

type Props = {
  children: React.ReactNode;
  placeHolder: string;
  label: string;
};

const SmartInput = ({ children, placeHolder = '', label }: Props) => {
  return (
    <div className='smart-input'>
      <div className='wrapper'>
        {children}
        <div className='input-wrapper'>
          <input type='text' placeholder={placeHolder} />
          <span className='label'>{label} </span>
        </div>
      </div>
    </div>
  );
};

export default SmartInput;

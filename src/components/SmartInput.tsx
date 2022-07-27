import React from 'react';
import { styledInjector } from '../utils';
type Props = {
  children: React.ReactChild;
  placeHolder: string;
  label: string;
  type: string;
  name: string;
};

const SmartInput = ({
  children,
  placeHolder = '',
  label,
  type = 'text',
  name,
}: Props) => {
  const [isFocus, setIsFocus] = React.useState(false);
  return (
    <div className='smart-input'>
      <div className='wrapper'>
        {styledInjector(children, isFocus ? 'isFocus' : '')}
        <div className='input-wrapper'>
          <input
            name={name}
            type={type}
            placeholder={placeHolder}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
          />
          <span className='label'>{label} </span>
        </div>
      </div>
    </div>
  );
};

export default SmartInput;

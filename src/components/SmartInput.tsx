import React from 'react';
import { styledInjector } from '../utils';
type Props = {
  children: React.ReactChild;
  placeHolder: string;
  label: string;
};

const SmartInput = ({ children, placeHolder = '', label }: Props) => {
  const [isFocus, setIsFocus] = React.useState(false);
  return (
    <form className='smart-input'>
      <div className='wrapper'>
        {styledInjector(children, isFocus ? 'isFocus' : '')}
        <div className='input-wrapper'>
          <input
            type='text'
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
    </form>
  );
};

export default SmartInput;

import React from 'react';
import { styledInjector } from '../utils';
import { IsearchForm } from '../interfaces';
type Props = {
  children?: React.ReactChild;
  placeHolder: string;
  label: string;
  type: string;
  ommitIcon: boolean;
  value: string;
  name: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setSearchForm: React.Dispatch<React.SetStateAction<IsearchForm>>
  ) => void;
  setSearchForm: React.Dispatch<React.SetStateAction<IsearchForm>>;
};

const SmartInput = ({
  children,
  placeHolder = '',
  label,
  type,
  ommitIcon = false,
  value,
  name,
  handleChange,
  setSearchForm,
}: Props) => {
  const [isFocus, setIsFocus] = React.useState(false);
  return (
    <div className='smart-input'>
      <div className='wrapper'>
        {ommitIcon ? (
          <span className='icon'></span>
        ) : (
          styledInjector(children, isFocus ? 'isFocus' : '')
        )}
        <div className='input-wrapper'>
          <input
            value={value}
            name={name}
            type={type}
            placeholder={placeHolder}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            onChange={(e) => {
              handleChange(e, setSearchForm);
            }}
          />
          <span className='label'>{label} </span>
        </div>
      </div>
    </div>
  );
};

export default SmartInput;

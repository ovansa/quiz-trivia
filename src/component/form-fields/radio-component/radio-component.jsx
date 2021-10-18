import React from 'react';

import './radio-component.styles.scss';

const Radio = ({ selected, onChange, text, option, value }) => {
  const isSelected = value === selected ? 'selected' : '';
  if (isSelected === 'selected') {
    console.log('I selected this -------------------------------', text);
  }

  return (
    <div
      className={`radio-option ${isSelected}`}
      onClick={() => {
        // alert('This option was clicked', value);

        onChange(value);
      }}>
      <div className='option-label'>
        <p className='option-label-info'>Key</p>
        <p>{option.toUpperCase()}</p>
      </div>
      <p className='option-text'>{text}</p>
    </div>
  );
};

export default Radio;

import React from 'react';

import './option.component.styles.scss';

const Option = ({ option: { option, value } }) => {
  return (
    <div className='option'>
      <div className='option-label'>
        <p className='option-label-info'>Key</p>
        <p>{option.toUpperCase()}</p>
      </div>
      <p className='option-text'>{value}</p>
    </div>
  );
};

export default Option;

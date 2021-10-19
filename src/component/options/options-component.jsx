import React, { useState } from 'react';
import Radio from '../form-fields/radio-component/radio-component';

import './options-component.styles.scss';

const Options = ({ options }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className='options'>
      {options.map((option) => (
        <Radio
          key={option.option}
          value={option.option}
          selected={selected}
          text={option.value}
          onChange={setSelected}
          option={option.option}
        />
      ))}
    </div>
  );
};

export default Options;

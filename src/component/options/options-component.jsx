import React, { useState } from 'react';
import Radio from '../form-fields/radio-component/radio-component';

import './options-component.styles.scss';

const Options = () => {
  const [selected, setSelected] = useState('');

  const options = [
    {
      option: 'a',
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      option: 'b',
      value:
        'Fusce id sem est. Mauris justo lorem, posuere non odio id, aliquam feugiat libero.',
    },
    { option: 'c', value: 'This is the main thing I was talking about' },
    {
      option: 'd',
      value: 'Mauris justo lorem, posuere non odio id, aliquam feugiat libero.',
    },
  ];
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
        // <Option key={option.option} option={option} />
      ))}
    </div>
  );
};

export default Options;

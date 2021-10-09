import React from 'react';
import Option from '../option/option.component';

import './options-component.styles.scss';

const Options = () => {
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
        <Option key={option.option} option={option} />
      ))}
      {/* <Option optionText={''}/>
      <Option />
      <Option /> */}
    </div>
  );
};

export default Options;

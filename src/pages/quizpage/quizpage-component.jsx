import React from 'react';
import Options from '../../component/options/options-component';

import { ReactComponent as ArrowUpIcon } from '../../assets/up-arrow-svgrepo-com.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/down-arrow-svgrepo-com.svg';

import './quizpage-component.styles.scss';

const QuizPage = () => {
  return (
    <div className='quiz-page'>
      <div className='question-container'>
        <div className='question-description'>
          <p>1.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            finibus tempus. Phasellus eu leo fermentum, luctus dui et, rutrum
            elit. Integer sed risus mattis, ullamcorper nisl facilisis, euismod
            ligula. Maecenas sit amet maximus nisl. Nam vel pulvinar sem, quis
            ultricies felis. Ut egestas tincidunt elit, nec elementum neque
            finibus quis.
          </p>
        </div>
        <Options />
        <button className='ok-button'>OK</button>
      </div>
      <div className='next-previous-buttons'>
        <button className='up-button'>
          <ArrowUpIcon className='icon' />
        </button>
        <button className='down-button'>
          <ArrowDownIcon className='icon' />
        </button>
      </div>
    </div>
  );
};

export default QuizPage;

// TODO: Display dynamic questions

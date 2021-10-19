import React, { useState } from 'react';
import Options from '../../component/options/options-component';

import { ReactComponent as ArrowUpIcon } from '../../assets/up-arrow-svgrepo-com.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/down-arrow-svgrepo-com.svg';

import questions from './questions';

import './quizpage-component.styles.scss';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = currentQuestion + 1;

  const displayNext = () => {
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const displayPrevious = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  return (
    <div className='quiz-page'>
      <div className='question-container'>
        <div className='question-description'>
          <p>{currentQuestion + 1}.</p>
          <p>{questions[currentQuestion].question}</p>
        </div>
        <Options options={questions[currentQuestion].options} />
        <button className='ok-button' onClick={() => displayNext()}>
          OK
        </button>
      </div>
      <div className='next-previous-buttons'>
        <button className='up-button'>
          <ArrowUpIcon className='icon' onClick={() => displayNext()} />
        </button>
        <button className='down-button'>
          <ArrowDownIcon className='icon' onClick={() => displayPrevious()} />
        </button>
      </div>
    </div>
  );
};

export default QuizPage;

// TODO: Save selected answers and pre-fill selected answers on navigate back and forth questions.

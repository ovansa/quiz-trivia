import React, { useState } from 'react';
import Options from '../../component/options/options-component';

import ModalPopup from '../../component/modal/modal_popup.component';

import { ReactComponent as ArrowUpIcon } from '../../assets/up-arrow-svgrepo-com.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/down-arrow-svgrepo-com.svg';

import sampleQuestions from './questions';
import Radio from '../../component/form-fields/radio-component/radio-component';

import './quizpage-component.styles.scss';
import '../../component/options/options-component.styles.scss';

const QuizPage = () => {
  const questions = sampleQuestions.map((question) => {
    return {
      ...question,
      selectedAnswer: '',
    };
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userQuestions, setAnswerForQuestions] = useState(questions);
  const [isModalDisplayed, setDisplayModal] = useState(false);
  const nextQuestion = currentQuestion + 1;
  const btnPrevDisabled = currentQuestion - 1 < 0 ? 'disable' : '';
  const btnNextDisabled =
    currentQuestion + 1 >= userQuestions.length ? 'disable' : '';
  let userScore = 0;

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

  const updateQuestionAnswer = (value) => {
    let newQuestions = [...userQuestions];
    newQuestions[currentQuestion].selectedAnswer = value;
    setAnswerForQuestions(newQuestions);
  };

  const onClickSubmit = () => {
    setDisplayModal(!isModalDisplayed);
    for (let question of userQuestions) {
      if (question.selectedAnswer === question.correctAnswer) {
        userScore += 1;
      }
    }

    // alert(`Score is ${userScore}`);
    console.log('Score ', userScore);
  };

  return (
    <div className='quiz-page'>
      <div className='question-container'>
        <div className='question-description'>
          <p>{currentQuestion + 1}.</p>
          <p>{userQuestions[currentQuestion].question}</p>
        </div>

        <div className='options'>
          {userQuestions[currentQuestion].options.map((option) => (
            <Radio
              key={option.option}
              value={option.option}
              selected={userQuestions[currentQuestion].selectedAnswer}
              text={option.value}
              onChange={(value) => updateQuestionAnswer(value)}
              option={option.option}
            />
          ))}
        </div>
        <div className='next-prev-submit'>
          <div className='left'>
            <button
              className={`${btnPrevDisabled}`}
              disabled={btnPrevDisabled}
              onClick={() => displayPrevious()}>
              PREV
            </button>
            <button
              className={`${btnNextDisabled}`}
              disabled={btnNextDisabled}
              onClick={() => displayNext()}>
              NEXT
            </button>
          </div>
          <div className='right'>
            <button onClick={() => onClickSubmit()}>SUBMIT</button>
          </div>
        </div>
      </div>
      {/* <div className='next-previous-buttons'>
        <button className='up-button'>
          <ArrowUpIcon className='icon' onClick={() => displayNext()} />
        </button>
        <button className='down-button'>
          <ArrowDownIcon className='icon' onClick={() => displayPrevious()} />
        </button>
      </div> */}
      <ModalPopup
        isModalDisplayed={isModalDisplayed}
        showHideModal={() => setDisplayModal(!isModalDisplayed)}
        userQuestions={userQuestions}
      />
    </div>
  );
};

export default QuizPage;

//https://github.com/codingmarket07/Modal-Popup-UI-Design/blob/main/styles.css

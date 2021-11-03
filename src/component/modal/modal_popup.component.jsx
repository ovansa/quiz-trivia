import React from 'react';

import './modal_popup.component.styles.scss';

const ModalPopup = ({ isModalDisplayed, showHideModal, userQuestions }) => {
  const submitAnswer = () => {
    console.log('Answer submitted');
    showHideModal();
  };

  const getAnswer = (question) => {
    const answer = question.options.find(
      (option) => option.option === question.selectedAnswer
    );

    return answer || 'none selected';
  };

  console.log(getAnswer(userQuestions[0]));
  console.log('Something');

  return (
    <div
      class={`modal_popup ${
        isModalDisplayed === true ? 'show_modal_popup' : ''
      }`}>
      <div class='bg_shadow'></div>
      <div class='popup'>
        <div class='popup_head'>
          Here is a review of your answers.
          {/* <button class='close_btn'>Close</button> */}
        </div>
        <div class='popup_body'>
          {userQuestions.map((userQuestion) => (
            <div className='popup_review'>
              <div>{userQuestion.question}</div>
              <div>{userQuestion.selectedAnswer.toUpperCase()}</div>
              {/* <div>{userQuestion.options.find(option => option.option === userQuestion.selectedAnswer)}</div> */}
            </div>
          ))}
        </div>
        <div class='popup_foot'>
          <button class='popup_btn popup_cancel_btn' onClick={showHideModal}>
            Cancel
          </button>
          <button class='popup_btn popup_confirm_btn' onClick={submitAnswer}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;

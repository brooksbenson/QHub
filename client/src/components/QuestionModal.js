import React from 'react';
import Modal from 'react-modal';
import './styles/QuestionModal.css';

Modal.setAppElement('#root');

const QuestionModal = props => (
  <Modal
    className="question-modal"
    contentLabel="Ask a question"
    isOpen={props.open}
    onRequestClose={props.onRequestModalClose}
    shouldCloseOnEsc
    shouldCloseOnOverlayClick
    closeTimeoutMS={200}
  >
    <form className="question-modal__form">
      <h3 className="question-modal__header"> What's your question? </h3>
      <textarea className="question-modal__input" value={props.question} />
      <button className="question-modal__btn">Ask your question!</button>
    </form>
  </Modal>
);

export default QuestionModal;

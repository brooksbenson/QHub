import React from 'react';

const SectionHeadWithModalOption = props => (
  <header className="section-header">
    <h2 className="section-header__title"> {props.title} </h2>
    <button
      className="section-header__modal"
      onClick={props.onQuestionButtonClick}
    >
      Ask a question
    </button>
  </header>
);

export default SectionHeadWithModalOption;

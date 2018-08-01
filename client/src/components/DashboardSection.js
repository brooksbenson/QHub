import React, { Component } from 'react';
import SectionHead from './SectionHeadWithQuestionOption';
import QuestionModal from './QuestionModal';

class DashboardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionModalOpen: false,
      questionText: ''
    };
  }
  onQuestionButtonClick = () => {
    this.setState(({ questionModalOpen }) => ({
      questionModalOpen: true
    }));
  };
  onRequestModalClose = () => {
    this.setState(({ questionModalOpen }) => ({
      questionModalOpen: false
    }));
  };
  render() {
    return (
      <div className="dashboard">
        <QuestionModal
          open={this.state.questionModalOpen}
          onRequestModalClose={this.onRequestModalClose}
        />
        <SectionHead
          title="Answer questions"
          onQuestionButtonClick={this.onQuestionButtonClick}
        />
      </div>
    );
  }
}

export default DashboardSection;

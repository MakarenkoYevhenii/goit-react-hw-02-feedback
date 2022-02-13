import { Component } from 'react';
import FeedbackOptions from '../Feedback/leaveFeedBack/FeedbackOptions';
import ResultFeedback from '../Feedback/resuulteFeedBack/ResulteFeedback';

class Feedback extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
  setFeedback = property => {
    this.setState(prevState => {
      const value = prevState[property];
      return {
        [property]: value + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const value = this.state.Good + this.state.Neutral + this.state.Bad;
    return value;
  };
  countPositiveFeedbackPercentage = () => {
    const persent=Math.round(((this.state.Good*100)/(this.state.Good + this.state.Neutral + this.state.Bad)))
    if (persent===0)
    {
        return "0"
    }
    return persent
  };
  render() {
    return (
      <>
        <FeedbackOptions onLeaveFeedback={this.setFeedback} options={this.state} />
        <ResultFeedback
          result={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default Feedback;

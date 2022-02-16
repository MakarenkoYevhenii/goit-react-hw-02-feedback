import { Component } from 'react';
import FeedbackOptions from '../Feedback/leaveFeedBack/FeedbackOptions';
import Statistics from './statistics/Statistics'
import Section from './Section/Section';
import Notification from './notification/Notification'
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
        return 0
    }
    return persent
  };
  render() {
    const {Good,Neutral,Bad} = this.state;
    return (
      <>
        <Section title='Оставьте ваш отзыв'>
        <FeedbackOptions onLeaveFeedback={this.setFeedback} options={this.state} />
        </Section>
        <Section title ='Статистика'>
        {this.countTotalFeedback() ?<Statistics
          Good={Good}
          Neutral={Neutral}
          Bad={Bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />:<Notification message="There is no feedback"/>}
        
        </Section>
      </>
    );
  }
} 

export default Feedback;

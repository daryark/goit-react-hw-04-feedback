import { useState } from 'react';
import {
  Section,
  Container,
  FeedbackOptions,
  StatList,
  Notification,
} from './reexport';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = option => {
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return Object.values({ good, bad, neutral }).reduce((acc, i) => acc + i, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, bad, neutral })}
          handler={handleBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {bad === 0 && neutral === 0 && good === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <StatList
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}
// }

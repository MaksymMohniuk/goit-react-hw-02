import { useState } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [initialFeedback, setInitialFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [feedbacksVisible, setFeedbacksVisible] = useState(false);

  const feedbacksTotal =
    initialFeedback.good + initialFeedback.neutral + initialFeedback.bad;

  const updateFeedback = (feedbackType) => {
    setInitialFeedback({
      ...initialFeedback,
      [feedbackType]: initialFeedback[feedbackType] + 1,
    });
    setFeedbacksVisible(true);
  };

  const resetFeedback = () => {
    setInitialFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setFeedbacksVisible(false);
  };

  return (
    <>
      <Description />
      <Options
        handleFeedback={updateFeedback}
        handleClick={resetFeedback}
        feedbacksTotal={feedbacksTotal}
      />
      {feedbacksVisible && <Feedback initialFeedback={initialFeedback} />}
      {!feedbacksVisible && feedbacksTotal === 0 && <Notification />}
    </>
  );
}

export default App;

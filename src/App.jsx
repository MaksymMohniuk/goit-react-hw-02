import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

const zeroFeedback = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [initialFeedback, setInitialFeedback] = useState(() => {
    const stringifiedFeedbacks = localStorage.getItem("feedbacksValues");
    const parsedFeedbacks = JSON.parse(stringifiedFeedbacks) ?? zeroFeedback;
    return parsedFeedbacks;
  });

  const [feedbacksVisible, setFeedbacksVisible] = useState(false);

  const feedbacksTotal =
    initialFeedback.good + initialFeedback.neutral + initialFeedback.bad;

  const positivePercentage = Math.round(
    ((initialFeedback.good + initialFeedback.neutral) / feedbacksTotal) * 100
  );

  const updateFeedback = (feedbackType) => {
    setInitialFeedback({
      ...initialFeedback,
      [feedbackType]: initialFeedback[feedbackType] + 1,
    });
    setFeedbacksVisible(true);
  };

  const resetFeedback = () => {
    setInitialFeedback(zeroFeedback);
    setFeedbacksVisible(false);
  };

  useEffect(() => {
    localStorage.setItem("feedbacksValues", JSON.stringify(initialFeedback));
  }, [initialFeedback]);

  return (
    <>
      <Description />
      <Options
        handleFeedback={updateFeedback}
        handleClick={resetFeedback}
        feedbacksTotal={feedbacksTotal}
        positivePercentage={positivePercentage}
      />
      {feedbacksVisible && (
        <Feedback
          initialFeedback={initialFeedback}
          total={feedbacksTotal}
          positivePercentage={positivePercentage}
        />
      )}
      {!feedbacksVisible && feedbacksTotal === 0 && <Notification />}
    </>
  );
}

export default App;

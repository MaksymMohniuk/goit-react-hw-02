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

  const feedbacksTotal =
    initialFeedback.good + initialFeedback.neutral + initialFeedback.bad;

  const positivePercentage = Math.round(
    ((initialFeedback.good + initialFeedback.neutral) / feedbacksTotal) * 100
  );

  const updateFeedback = (feedbackType) => {
    setInitialFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setInitialFeedback(zeroFeedback);
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
      {feedbacksTotal > 0 && (
        <Feedback
          initialFeedback={initialFeedback}
          total={feedbacksTotal}
          positivePercentage={positivePercentage}
        />
      )}
      {feedbacksTotal === 0 && <Notification />}
    </>
  );
}

export default App;

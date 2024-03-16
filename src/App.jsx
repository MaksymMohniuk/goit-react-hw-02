import { useState } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

function App() {
  const { initialFeedback, setInitialFeedback } = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  console.log(initialFeedback);

  const updateFeedback = (feedbackType) => {
    setInitialFeedback({
      ...initialFeedback,
      [feedbackType]: initialFeedback[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback initialFeedback={initialFeedback} />
    </>
  );
}

export default App;

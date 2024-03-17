const Feedback = ({ initialFeedback }) => {
  return (
    <ul>
      <li>Good: {initialFeedback.good}</li>
      <li>Neutral: {initialFeedback.neutral}</li>
      <li>Bad: {initialFeedback.bad}</li>
    </ul>
  );
};

export default Feedback;

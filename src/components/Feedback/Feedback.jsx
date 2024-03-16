const Feedback = ({ initialFeedback }) => {
  console.log(initialFeedback);
  return (
    <ul>
      <li>{initialFeedback.good}</li>
      <li>{initialFeedback.neutral}</li>
      <li>{initialFeedback.bad}</li>
    </ul>
  );
};

export default Feedback;

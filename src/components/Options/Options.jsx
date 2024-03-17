const Options = ({ handleFeedback, handleClick, feedbacksTotal }) => {
  return (
    <div>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      {feedbacksTotal > 0 && (
        <button onClick={() => handleClick()}>Reset</button>
      )}
    </div>
  );
};

export default Options;

import styles from "./Options.module.css";

const Options = ({ handleFeedback, handleClick, feedbacksTotal }) => {
  return (
    <div className={styles.optionsContainer}>
      <button
        className={styles.optionButton}
        onClick={() => handleFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.optionButton}
        onClick={() => handleFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.optionButton}
        onClick={() => handleFeedback("bad")}
      >
        Bad
      </button>
      {feedbacksTotal > 0 && (
        <button className={styles.resetButton} onClick={() => handleClick()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

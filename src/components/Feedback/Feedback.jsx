import styles from "./Feedback.module.css";

const Feedback = ({ initialFeedback, total, positivePercentage }) => {
  return (
    <div className={styles.feedbackContainer}>
      <ul className={styles.feedbackList}>
        <li>Good: {initialFeedback.good}</li>
        <li>Neutral: {initialFeedback.neutral}</li>
        <li>Bad: {initialFeedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;

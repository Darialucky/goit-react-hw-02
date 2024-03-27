import css from "./Feedback.module.css";

const Feedback = ({ data, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedback}>
      <p className={css.text}>
        Good: <span>{data.good}</span>
      </p>
      <p className={css.text}>
        Neutral: <span>{data.neutral}</span>
      </p>
      <p className={css.text}>
        Bad: <span>{data.bad}</span>
      </p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>
        Positive: <span>{positiveFeedback}%</span>
      </p>
    </div>
  );
};

export default Feedback;

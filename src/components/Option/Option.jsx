import css from "./Option.module.css";
const Option = ({ callback, totalFeedback, reset }) => {
  return (
    <div className={css.block}>
      <button className={css.btn} onClick={() => callback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => callback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => callback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default Option;

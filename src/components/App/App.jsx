import "./App.css";
import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";

function App() {
  const [state, setState] = useState(() => {
    const savedState = JSON.parse(window.localStorage.getItem("saved-state"));
    if (savedState !== null) {
      return savedState;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setState({
      ...state,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-state", JSON.stringify(state));
  }, [state]);

  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        callback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          data={state}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;

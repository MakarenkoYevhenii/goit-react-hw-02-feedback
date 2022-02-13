import Notification from "../notification/Notification"


const resultFeedback = ({ result, total, positivePercentage }) => {

  return (
    <div>
    <h2>Statistics</h2>

      {total ? (
        <ul>
          <li>
            <p>Good:{result.Good}</p>
          </li>
          <li>
            <p>Neutral: {result.Neutral}</p>
          </li>
          <li>
            <p>Bad: {result.Bad}</p>
          </li>
          <li>
            <p>Total:{total}</p>
          </li>
          <li>
            <p>Positive feedback:{positivePercentage}%</p>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default resultFeedback;

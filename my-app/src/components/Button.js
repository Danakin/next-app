import { useState } from "react";

const Button = (props) => {
  const [numOfClicks, setNumOfClicks] = useState(0);
  const handleClick = () => {
    setNumOfClicks(numOfClicks + 1);
    props.incrementNumberOfClicks();
  };
  return (
    <div>
      <button onClick={handleClick}>{props.title}</button>
      <span>{numOfClicks} times</span>
    </div>
  );
};

export default Button;

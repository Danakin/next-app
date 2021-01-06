import { useState } from "react";

const Button = () => {
  const [numOfClicks, setNumOfClicks] = useState(0);
  const handleClick = () => {
    setNumOfClicks(numOfClicks + 1);
  };
  return <button onClick={handleClick}>clicked {numOfClicks} times</button>;
};

export default Button;

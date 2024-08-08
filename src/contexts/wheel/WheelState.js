import React, { useState } from "react";
import WheelContext from "./wheelContext";

const WheelState = ({ children }) => {
  const [isFinished, setFinished] = useState(false);
  const [winner, setWinner] = useState(null);

  const value = {
    isFinished,
    setFinished,
    winner,
    setWinner,
  };

  return (
    <WheelContext.Provider value={value}>{children}</WheelContext.Provider>
  );
};

export default WheelState;

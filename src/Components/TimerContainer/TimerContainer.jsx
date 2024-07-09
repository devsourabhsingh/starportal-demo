import React, { useState, useEffect } from "react";
import "./TimerContainer.css";
import DotBg from "../../Image/dotBg.png";

const TimerContainer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-15T00:00:00");
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="sub-wrapper">
        <div>
          <i className="bi bi-clock-history"></i>
        </div>
        Reward unlocks in
      </div>
      <hr />
      <div className="timer-bg">
        <img src={DotBg} alt="dot background" />
        <div className="timer-log">
          <h3>{timeLeft.days || "00"}</h3>
          <p>Days</p>
        </div>
        <div className="timer-log">
          <h3>{timeLeft.hours || "00"}</h3>
          <p>Hrs</p>
        </div>
        <div className="timer-log">
          <h3>{timeLeft.minutes || "00"}</h3>
          <p>Mins</p>
        </div>
        <div className="timer-log">
          <h3>{timeLeft.seconds || "00"}</h3>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
};

export default TimerContainer;

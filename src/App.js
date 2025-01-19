import React, { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval
  }, []);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata",
      hour12: true,
    }).format(date);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    }).format(date);
  };

  const hourDeg = (time.getHours() % 12) * 30 + (time.getMinutes() / 2); // Calculate hour hand position
  const minuteDeg = time.getMinutes() * 6; // Calculate minute hand position
  const secondDeg = time.getSeconds() * 6; // Calculate second hand position

  return (
    <div className="app-container">
      <div className="clock-wrapper">
        <div className="clock">
          <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
          <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
          <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
          <div className="center"></div>
        </div>
      </div>
      <div className="time-date">
        <h1>{formatTime(time)}</h1>
        <p>{formatDate(time)}</p>
      </div>
    </div>
  );
};

export default App;

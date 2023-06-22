import React, { useEffect, useState } from 'react';

function Timer( { seconds, setSeconds } ) {

  const [isRunning, setIsRunning] = useState(false);


  console.log(typeof(seconds))

  function startTimer() {
    setIsRunning(true);
  };

  function stopTimer() {
    setIsRunning(false);
  };

  function resetTimer() {
    setSeconds(0)
  }

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className='timer rc'>
      <h5>Timer: {seconds}</h5>
      <div className='timer-btn rc' onClick={startTimer}>Start</div>
      <div className='timer-btn rc' onClick={stopTimer}>Stop</div>
      <div className='timer-btn rc' onClick={resetTimer}>Reset</div>
    </div>
  );
}

export default Timer;
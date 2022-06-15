import { FC, useState, useEffect } from 'react';
import './timer.scss'

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [time, setTime] = useState(limit);
  const [isStart, setIsStart] = useState(false);
  const [intervalId, setIntervalId] = useState<any>();
  const tick = (): void => setTime((t) => t - 1);
  const start = (): void => {
    setIsStart(true);
    setIntervalId(setInterval(tick, 1000));
  }
  const reset = (): void => {
    setTime(limit);
    setIsStart(false);
  }
  const stop = (): void => {
    clearInterval(intervalId);
    setIsStart(false);
  }

  useEffect(() => {
    if (isStart === false) {
       return;
    }
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (time === 0) setTime(limit);
  })

  return(
    <section className="timer">
      <div className="timer__display">{time}</div>
      <div className="timer__button-area">
        <button className="timer__button timer__button--reset" onClick={reset}>Reset</button>
        { isStart ? <button className="timer__button timer__button--stop" onClick={stop}>Stop</button> : <button className="timer__button timer__button--start" onClick={start}>Start</button> }
      </div>
    </section>
  )
}

export default Timer;

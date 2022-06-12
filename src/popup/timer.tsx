import { FC, useState, useEffect } from 'react';
import './popup.scss'

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [time, setTime] = useState(limit);
  const [isStart, setIsStart] = useState(false);
  const tick = (): void => setTime((t) => t - 1);
  const start = (): void => {
    setIsStart(true);
    const timerId = setInterval(tick, 1000);
  }
  const reset = (): void => {
    setTime(limit);
    setIsStart(false)
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
    <section className="popup">
      <h1>{time}</h1>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={start}>Start</button>
      </div>
    </section>
  )
}


export default Timer;

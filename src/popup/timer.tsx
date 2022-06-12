import { FC, useState, useEffect } from 'react';
import './popup.scss'

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [time, setTime] = useState(limit);
  const reset = (): void => setTime(limit);
  const tick = (): void => setTime((t) => t - 1);

  useEffect(() => {
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
      </div>
    </section>
  )
}


export default Timer;

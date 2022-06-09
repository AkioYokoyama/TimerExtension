import { FC, useState } from 'react';
import './popup.scss'

const Timer: FC = () => {
  const [time, setTime] = useState(60);

  return(
    <section className="popup">
      <h1>{time}</h1>
      <p className="popup__description">This is Chrome Extension Popup Sample</p>
    </section>
  )
}


export default Timer;

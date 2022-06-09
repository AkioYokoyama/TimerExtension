import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './popup.scss'

const rootEl = document.getElementById('root')

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <section className="popup">
      <h1>Google Chrome Extension Popup</h1>
      <p className="popup__description">This is Chrome Extension Popup Sample</p>
    </section>
  );
}

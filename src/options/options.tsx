import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './options.scss'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <section className="options">
      <h1>Hello Options</h1>
      <p className="options__description">This is Google Extension Option Sample</p>
    </section>
  );
}

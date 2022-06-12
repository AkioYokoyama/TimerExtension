import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Timer from './timer';

const rootEl = document.getElementById('root')

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <Timer limit={60} />
  );
}

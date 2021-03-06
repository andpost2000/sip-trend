import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style/main.scss';

import App from './App';
import register from './registerServiceWorker';

register();
ReactDOM.render(
    <App />,
  document.getElementById('root') as HTMLElement,
);

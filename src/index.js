import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(<Router><App /></Router>  , root);
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();
registerServiceWorker();

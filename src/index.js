import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import {configureStore} from './app/store/configureStore'

const render = () => 
  ReactDOM.render(
  <Provider store={configureStore()} > 
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));


if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();
registerServiceWorker();

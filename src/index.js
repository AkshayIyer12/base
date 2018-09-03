import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


let root =   document.getElementById('root')
let render = () => {
  ReactDOM.render( <App />, root)
}

if (module.hot){
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}

render()
registerServiceWorker();

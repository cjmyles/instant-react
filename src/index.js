import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '@hbagroup/instant-react/redux/store';
import rootReducer from 'redux/modules/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

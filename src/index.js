import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import RouterMapIndex from './components/';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <RouterMapIndex />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

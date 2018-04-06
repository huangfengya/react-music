import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import RouterMapIndex from './components/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterMapIndex />, document.getElementById('root'));
registerServiceWorker();

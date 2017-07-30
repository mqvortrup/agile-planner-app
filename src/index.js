import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AgilePlannerApp from './AgilePlannerApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AgilePlannerApp />, document.getElementById('root'));
registerServiceWorker();

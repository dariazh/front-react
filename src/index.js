import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Index from './layouts';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <Index/>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
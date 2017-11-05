import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import initialReduxState from './constants/initialState';
import { routes } from './routes';

// Create the Redux store
const store = configureStore(initialReduxState);
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

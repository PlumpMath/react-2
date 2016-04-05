import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

let handleCreateElement = (Component, props) => {
    if (Component.requestInitialData) {
        let initialData = document.getElementById('initial-data').textContent;
        if (initialData.length > 0) {
            initialData = JSON.parse(initialData);
        } else {
            initialData = [];
        }
        return <Component contacts={initialData} {...props} />;
    } else {
        return <Component {...props} />;
    }
};

render(<Router history={browserHistory} createElement={handleCreateElement}>{routes}</Router>, document.getElementById('root'));

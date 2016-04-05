import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactsApp from './components/ContactsApp';
import { match, RouterContext } from 'react-router';
import routes from './routes';

const app = express();

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

let getPropsFromRoute = (routes) => {
    let props = {};
    routes.forEach(function(route) {
        if (!props.requestInitialData && route.component.requestInitialData) {
            props.requestInitialData = route.component.requestInitialData;
        }
    });
    return props;
};

let renderRoute = (response, renderProps) => {
    let routeProps = getPropsFromRoute(renderProps.routes);
    if (routeProps.requestInitialData) {
        routeProps.requestInitialData().then((data)=> {
            let handleCreateElement = (Component, props) =>(
                <Component contacts={data} {...props} />
            );
            response.render('index', {
                reactInitialData: JSON.stringify(data),
                content: renderToString(<RouterContext createElement={handleCreateElement} {...renderProps} />)
            });
        });
    } else {
        response.render('index', {
            reactInitialData: '',
            content: renderToString(<RouterContext {...renderProps} />)
        });
    }
};

app.get('*', (request, response) => {
    match({routes, location: request.url}, (error, redirectLocation, renderProps) => {
        if (renderProps) {
            renderRoute(response, renderProps);
        } else {
            response.sendStatus(404);
        }
    });
});

app.listen(3000, ()=> {
    console.log('Express app listening on port 3000');
});

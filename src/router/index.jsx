import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from './renderer';
import routes from './router.config';

function RouterConfig({ history }) {
  return (
    <BrowserRouter history={history}>
      {renderRoutes({ routes })}
    </BrowserRouter>
  )
}

export default RouterConfig;  
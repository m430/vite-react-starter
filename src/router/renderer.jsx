import React from 'react';
import path from 'path';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

function render({ route, opts, props }) {
  const routes = renderRoutes({
    ...opts,
    routes: route.routes || [],
  });

  let { component, wrappers } = route;
  if (component) {
    const newProps = {
      ...props,
      ...opts.extraProps,
      route,
    };

    let Component = loadable(() => import(`../${component}.jsx`));

    let ret = <Component {...newProps}>{routes}</Component>

    // route.wrappers
    if (wrappers) {
      let len = wrappers.length - 1;
      while (len >= 0) {
        ret = React.createElement(wrappers[len], newProps, ret);
        len -= 1;
      }
    }

    return ret;
  } else {
    return routes;
  }
}

function getRouteElement({ route, index, opts }) {
  const routeProps = {
    key: route.key || index,
    exact: route.exact,
    strict: route.strict,
    sensitive: route.sensitive,
    path: route.path
  };

  if (route.redirect) {
    return <Redirect {...routeProps} from={route.path} to={route.redirect} />;
  } else {
    return (
      <Route
        {...routeProps}
        render={(props) => {
          return render({ route, opts, props });
        }}
      />
    );
  }
}

export const renderRoutes = (opts) => {
  return opts.routes ? (
    <Switch>
      {opts.routes.map((route, index) => getRouteElement({ route, index, opts }))}
    </Switch>
  ) : null;
}
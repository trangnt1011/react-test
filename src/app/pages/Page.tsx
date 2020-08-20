import React, { Suspense } from 'react';

import { Footer, Header } from '@shared/components/layout/index';
import { Route, Switch } from 'react-router';

const Page = ({ routes }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {
            routes.map((route: any, index: number) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.element {...props} routes={route.routes} />
                )}
              />
            ))
          }
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default Page;

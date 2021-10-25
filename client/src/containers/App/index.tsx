import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import Auth from 'containers/Auth';
import FullPageLoader from 'components/Loaders/FullPageLoader';

const Todos = React.lazy(() => import('containers/Todos'));

const App: React.FC = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/">
          <Auth />
          {/* <Todos /> */}
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;

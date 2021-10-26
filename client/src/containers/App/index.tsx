import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import SingUp from 'containers/Auth/SingUp';
import SingIn from 'containers/Auth/SingIn';
import ResetPas from 'containers/Auth/ResetPas';

const Todos = React.lazy(() => import('containers/Todos'));

const App: React.FC = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/">
          <Todos />
        </Route>
        <Route exact path="/singIn">
          <SingIn />
        </Route>
        <Route exact path="/singUp">
          <SingUp />
        </Route>
        <Route exact path="/resetPas">
        <ResetPas />
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;

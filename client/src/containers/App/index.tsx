import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'components/Loaders/FullPageLoader';

const Todos = React.lazy(() => import('containers/Todos'));
const SignIn = React.lazy(() => import('containers/Auth/SignIn'));
const SignUp = React.lazy(() => import('containers/Auth/SignUp'));
const ResetPassword = React.lazy(() => import('containers/Auth/ResetPassword'));

const App: React.FC = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/Todos">
          <Todos />
        </Route>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/ResetPassword">
          <ResetPassword />
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;

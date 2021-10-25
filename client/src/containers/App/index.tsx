import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import Auth from 'containers/Auth';
import SignUp from 'containers/Auth/SignUp';
import ResetPassword from 'containers/Auth/ResetPassword';

const Todos = React.lazy(() => import('containers/Todos'));
const SignIn = React.lazy(() => import('containers/Auth/SignIn'));

const App: React.FC = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/">
          <Todos />
        </Route>
        <Route exact path="/SignIn">
          <SignIn name="Sign in" />
        </Route>
        <Route exact path="/Auth">
          <Auth name="Auth" />
        </Route>
        <Route exact path="/SignUp">
          <SignUp name="Sign up" />
        </Route>
        <Route exact path="/ResetPassword">
          <ResetPassword name="Reset Password" />
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import SignUp from 'containers/Auth/SignUp';
import ResetPassword from 'containers/Auth/ResetPassword';

const Todos = React.lazy(() => import('containers/Todos'));
const SignIn = React.lazy(() => import('containers/Auth/SignIn'));

const App: React.FC = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/Todos">
          <Todos />
        </Route>
        <Route path="/SignIn">
          <SignIn name="Sign in" />
        </Route>
        <Route path="/SignUp">
          <SignUp name="Sign up" />
        </Route>
        <Route path="/ResetPassword">
          <ResetPassword name="Reset Password" />
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;

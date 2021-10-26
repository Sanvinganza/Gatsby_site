import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import Auth from 'containers/Auth';
import SignIn from 'containers/Auth/SignIn';
import SignUp from 'containers/Auth/SignUp';
import ResetPassword from 'containers/Auth/ResetPassword';
import FullPageLoader from 'components/Loaders/FullPageLoader';

const Todos = React.lazy(() => import('containers/Todos'));

const App: React.FC = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/">
          <Todos />
        </Route>
        <Route exact path="/Auth">
          <Auth name="Auth" />
        </Route>
        <Route exact path="/SignIn">
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

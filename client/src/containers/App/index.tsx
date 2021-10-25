import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import ResetPassword from '../Auth/ResetPassword';

const Todos = React.lazy(() => import('containers/Todos'));

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

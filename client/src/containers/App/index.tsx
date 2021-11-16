import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import SingUp from 'containers/Auth/SignUp';
import SingIn from 'containers/Auth/SignIn';
import ResetPas from 'containers/Auth/ResetPas';
import MainPage from 'containers/MainPage/MainPage';

const Todos = React.lazy(() => import('containers/Todos'));

const App: React.FC = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/Todos">
          <Todos />
        </Route>
        <Route exact path="/singIn">
          <SingIn />
        </Route>
        <Route exact path="/">
          <SingUp />
        </Route>
        <Route exact path="/resetPas">
        <ResetPas />
        </Route>
        <Route exact path="/MainPage">
          <MainPage />
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;

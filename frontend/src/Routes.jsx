import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Curso from './components/CursosMain';

const Routes = () => {

  const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path='/' component={Home} />
        <Route exact path='/cursos' component={Curso} />
        <Route component={NotFound} />
      </Switch>
    </Router>

  );
};
export default Routes;

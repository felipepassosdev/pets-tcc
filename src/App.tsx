import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
      </Switch>
    </>
  );
}

export default App;

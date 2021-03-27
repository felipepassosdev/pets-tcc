import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/user/login';
import Register from './pages/user/register';
import PetRegister from './pages/pet/register';
const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/pet/register" exact component={PetRegister} />
      </Switch>
    </>
  );
}

export default App;

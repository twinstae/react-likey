import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProductPage from './pages/AddProductPage';
import Home from './pages/home';
const App = () => {
  return (
    <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/add">
                <AddProductPage />
            </Route>
        </Switch>
    </>
  )
}

export default App;
  
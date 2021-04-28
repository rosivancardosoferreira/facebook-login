import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom';

//PAGES
import Home from 'Pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
            <Home/>
        </Route>
        <Route>
          <Redirect to='/home'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

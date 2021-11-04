import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn}/>
          {/* <Route exact path="/" render={()=> <h1>Home</h1>}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

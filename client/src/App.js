import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import User from './user/User.js'
import './App.css';

function App() {

  const [ currentUser, setCurrentUser ] = useState(false)

  console.log(currentUser)

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if (res.ok) {
        res.json().then(user => { setCurrentUser(user)})
      }
    })
  }, [])

  return (
    <div className="App">
      {currentUser ? 
      <BrowserRouter>
      <Switch>
        <Route path={`/user/${currentUser.username}`}>
          <User currentUser={currentUser}/>
        </Route>
      </Switch>
      </BrowserRouter>
      :
      <BrowserRouter>
        <Switch>
        <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='/login'>
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import User from './user/User';
import Profile from './user/profile/Profile';
import StartExercise from './user/start-exercise/StartExercise';
import UserProgress from './user/progress/UserProgress';
import './App.css';

function App() {

  const [ currentUser, setCurrentUser ] = useState(false)

  // console.log(currentUser)

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if (res.ok) {
        res.json().then((user) => { setCurrentUser(user)})
      }
    })
  }, [])

  function updateUser(user) {
    setCurrentUser(user)
  }

  return (
    <div className="App">
      {!currentUser ? 
      <BrowserRouter>
        <Switch>
        <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='/login'>
            <Login updateUser={updateUser}/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter> 
      :
            <BrowserRouter>
            <Switch>
            <Route path={`/user/${currentUser.username}/profile`}>
                <Profile currentUser={currentUser} updateUser={updateUser}/>
              </Route>
              <Route path={`/user/${currentUser.username}/progress`}>
                <UserProgress currentUser={currentUser}/>
              </Route>
              <Route path={`/user/${currentUser.username}/start-exercise`}>
                <StartExercise currentUser={currentUser}/>
              </Route>
              <Route path={`/user/${currentUser.username}`}>
                <User currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              </Route>
            </Switch>
            </BrowserRouter>
      }
    </div>
  );
}

export default App;

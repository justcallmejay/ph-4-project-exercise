import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import User from './user/User';
import Profile from './user/profile/Profile';
import StartExercise from './user/start-exercise/StartExercise';
import UserProgress from './user/progress/UserProgress';
import { UserContext } from './context/account';
import './App.css';

function App() {

  const { setCurrentUser, currentUser } = useContext(UserContext) 

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if (res.ok) {
        res.json().then((user) => { setCurrentUser(user) })
      }
    })
  }, [setCurrentUser])

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
                <Profile updateUser={updateUser}/>
              </Route>
              <Route path={`/user/${currentUser.username}/progress`}>
                <UserProgress />
              </Route>
              <Route path={`/user/${currentUser.username}/start-exercise`}>
                <StartExercise />
              </Route>
              <Route path={`/user/${currentUser.username}`}>
                <User />
              </Route>
            </Switch>
            </BrowserRouter>
      }
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage';
import "./App.css"
import "./styles/Form.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        
            <div className="App-content">
              <Switch>
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/profile" component={ProfilePage}/>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/create" component={CreatePage} />
              </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

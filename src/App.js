import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Profile from './components/Profile';
import NewPage from './components/NewPage';
import Navigation from './components/Navigation';
import "./App.css"
import "./styles/Form.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route component={Navigation} />
            <div className="App-content">
              <Switch>
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/newpage" component={NewPage}/>
              </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

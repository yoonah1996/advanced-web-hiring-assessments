import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import { Mypage } from './pages/Mypage';

class App extends React.Component {
  state = {
    isLogin: false
  };
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              render={() => <Login isLogin={isLogin} />}
            ></Route>
            <Route
              exact
              path="/signup"
              render={() => <Signup isLogin={isLogin} />}
            ></Route>
            <Route
              exact
              path="/mypage"
              render={() => <Mypage isLogin={isLogin} />}
            ></Route>
            <Route
              path="/"
              render={() => {
                if (isLogin) {
                  return <Redirect to="/mypage" />;
                }
                return <Redirect to="/login" />;
              }}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

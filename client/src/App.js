import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import { Mypage } from './pages/Mypage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      userData : null
    };
  }

  isLoginToken(data){
    this.setState({
      isLogin: true,
      userData : data
    })
  }

  render() {
    const { isLogin, userData } = this.state;
    return (
      <div>
        <Switch>
          <Route path="/login" render={() => <Login isLogin={isLogin} isLoginToken = {this.isLoginToken.bind(this)} />} />
          <Route
            exact
            path="/signup"
            render={() => <Signup isLogin={isLogin} />}
          />
          <Route
            exact
            path="/mypage"
            render={() => <Mypage isLogin={isLogin} userinfo = {userData}/>}
          />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/mypage" />;
              }
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
// 

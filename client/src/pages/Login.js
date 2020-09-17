import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    return (
      <div>
        <center>
          <h1>Sign In</h1>=
          <form
            onSubmit={e => {
              e.preventDefault();
              // TODO : 서버에 로그인 요청 후 처리하세요.
              fetch('http://localhost:4000/signin',{
                method : 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'

                },
                body: JSON.stringify(this.state)
              })
              .then(res => {
                return res.json()
              } )
              .then(data =>{
                if(data !== null){
                  this.props.isLoginToken(data)
                  this.props.history.push('/')
                }
              })
              .catch(err => alert("틀린 정보입니다."))
            }}
          >
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="email"
                placeholder="이메일을 입력 해주세요"
                onChange={this.handleInputValue('email')}
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="password"
                placeholder="비밀번호를 입력 해주세요"
                onChange={this.handleInputValue('password')}
              ></input>
            </div>
            <div>
              <Link to="/signup">아직 아이디가 없으신가요?</Link>
            </div>
            <button
              style={{
                width: '200px',
                height: '30px',
                margin: '5px',
                borderRadius: '5px',
                backgroundColor: 'skyblue'
              }}
              type="submit"
            >
              
              로그인
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);

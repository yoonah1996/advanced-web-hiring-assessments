const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const session = require('express-session');
require('./models');

const {
  signInController,
  signUpController,
  userContoroller
} = require('./controllers');

const app = express();

const port = 4000;

// TODO : express-session, cors 등 필요한 middleware를 사용하세요.
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
// cookie: { secure: true } //==> 


app.get('/user', userContoroller);
app.post('/signin', signInController);
app.post('/signup', signUpController);

// NOTICE 테스트를 위한 코드 입니다. 건들지 않으셔도 좋습니다.
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`server listen on ${port}`);
  });
}

module.exports = app;

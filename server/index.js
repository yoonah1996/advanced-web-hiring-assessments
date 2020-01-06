const express = require('express');
require('./models');

const {
  signInController,
  signUpController,
  userContoroller
} = require('./controllers');
const app = express();

app.get('/user', userContoroller);
app.post('/signin', signInController);
app.post('/signup', signUpController);

app.listen(4000, () => {
  console.log('server listen on 4000');
});

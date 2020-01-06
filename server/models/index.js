const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.NODE_ENV === 'test' ? '../.test.sqlite' : '../.sqlite'
});

const User = sequelize.define('user', {
  //TODO : user 테이블에 필요한 스키마를 정의 하세요
});

sequelize.sync().then(() => {
  console.log('sequelize sync to database');
});

module.exports = {
  User
};

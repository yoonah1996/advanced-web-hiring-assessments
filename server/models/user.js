'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      email : DataTypes.STRING,
      password : DataTypes.STRING,
      username : DataTypes.STRING,
      mobile : DataTypes.STRING

    },
    {
      // hooks:{
      //   afterValidate: (users, options) => {
      //     var shasum = crypto.createHash('sha1');
      //     shasum.update(users.password);
      //     users.password = shasum.digest('hex');
      //   }
      // }
    }
  );


  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
// email: 'testuser@gmail.com',
//         password: 'test',
//         username: 'testuser',
//         mobile: '010-0987-6543'
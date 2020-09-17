const { user } = require('./models');
module.exports = {
  signInController: async (req, res) => {
    await user.findAll({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(data => {
        if (data.length === 0) {
          res.status(404).send('unvalid user');
        } else {
          req.session.userId = data[0].dataValues.id;
          req.session.save(function () {
            res.status(200).send(data[0]);
          })
        }
      })
      .catch(err => {
        res.status(400).send(err);
      })
  },
  signUpController: async (req, res) => {
    await user.findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: {
        password: req.body.password,
        username: req.body.username,
        mobile: req.body.mobile
      }
    })
      .spread((data, created) => {
        if (created) {
          res.status(201).send(data.dataValues);
        } else {
          res.status(409).send('email exists');
        }
      })
      .catch(err => {
        res.status(400).send(err);
      })
  },
  userContoroller: async (req, res) => {
    if(req.session.userId === undefined){
      res.status(401).send('');
    }else{
      await user.findAll({
        where: {
          id: req.session.userId
        }
      })
      .then(data => {
        res.status(200).send(data[0]);
      })
    }
  }
};

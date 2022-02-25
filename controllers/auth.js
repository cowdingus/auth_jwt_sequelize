const { sign } = require("jsonwebtoken");
const models = require("../models");

module.exports = {
  login(req, res) {
    let credentials = {
      username: req.body.username,
      password: req.body.password,
    };

    if (!credentials.username || !credentials.password) {
      return res.send("Username dan/atau Password harus diisi!");
    }

    /*
    if (credentials.username != "admin" || credentials.password != "admin") {
      return res.send("Username dan/atau Password tidak sesuai");
    }
    */

    models.User.findOne({
      where: credentials,
    }).then((user) => {
      if (!user) return res.send("Username dan/atau password tidak sesuai");

      token = sign(credentials, "verysecretkey");

      return res.send({
        token: token,
        data: credentials,
      });
    });
  },

  register(req, res) {
    models.User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      address: req.body.address,
    }).then((user) => {
      return res.send({
        data: user,
      });
    });
  },
};

const { verify } = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  verify(token, "verysecretkey", function (err, user) {
    console.log(err);
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

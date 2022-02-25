module.exports = {
  index(req, res) {
    return res.send("Selamat datang di Perpustakaan");
  },

  home(req, res) {
    return res.send({
      user: req.user,
    });
  },
};

//var db = require("../database.js");

exports.index = function(req, res) {
  res.render("index", { "title": "Express" });
};


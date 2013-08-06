var db = require("../database.js");

exports.books = {};

exports.index = function(req, res) {
  res.render("index");
};

exports.books.all = function (req, res) {
  db.books.find({}, function (err, books) {
    if (err) throw err;
    var response = {
      books: books
    };
    res.json(response);
  });
}

exports.books.one = function(req, res) {
  var bookId = db.ObjectId(req.params.id);
  db.books.findOne( {"_id": bookId }, function (err, book) {
    if (err) throw err;
    var response = {
      book: book
    };
    res.json(response);
  });
}
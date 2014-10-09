// var path = require('path');
// var mongoose = require('mongoose');
//

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   // yay!
// });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000');
var Schema = mongoose.Schema;

module.exports.urls = new Schema({
  url:  String,
  base_url: String,
  code:   String,
  title: String,
  visits: Number,
});

module.exports.users = new Schema({
  username:  String,
  password: String,
});



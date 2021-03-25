"use strict";

var mongoose = require("mongoose");

var config = require("config");

var connectDB = function connectDB() {
  mongoose.connect(config.get("MONGOURI"), {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(function () {
    return console.log("mongoose connected");
  })["catch"](function (err) {
    return console.log("erreur");
  });
};

module.exports = connectDB;
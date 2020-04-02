var db = require("./models");
const express = require("express");
var session = require("express-session");
const dotenv = require('dotenv');
var passport = require("./config/passport");

dotenv.config();

let PORT = process.env.PORT || 8081;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
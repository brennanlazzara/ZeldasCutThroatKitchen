var db = require("./models");
const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

let PORT = process.env.PORT || 8081;

let app = express();



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// app.use(routes);

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// localhost3000
  var PORT = process.env.PORT || 3000;

//parse .json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//create static assets in public folder
app.use(express.static('app/public'));

//extablish routes
  require("./app/routing/apiRoutes")(app);
  require("./app/routing/htmlRoutes")(app);

//listen
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

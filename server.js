const express = require("express");
const cookieParser = require('cookie-parser')
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");

// Requiring our models for syncing
const db = require("./models");
let randomString = (Math.random() + 1).toString(36).substring(7);
// Define middleware here

//Adding morgan
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cookieParser()); 
      
app.use(session({
  secret: randomString,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
require("./routes/apiRoutes")(app);



// Send every other request to the React app

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});

const express = require("express");
const session = require("express-session");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("./passport")
const PORT = process.env.PORT || 3001;
const app = express();

// Requiring our models for syncing
var db = require("./models");

// Define middleware here

//Adding morgan
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "fraggle-rock",
    resave: false,
    saveUninitialized: false
  })
);
/*
app.use((req,res,next)=>{
  console.log(`req.session ${req.session}`);
  next();
});
*/
app.use(passport.initialize());
app.use(passport.session());
// Define API routes here
require("./routes/apiRoutes")(app);

//router.use("/api", apiRoutes);

// Send every other request to the React app

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});

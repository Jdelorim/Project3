// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
const bcrypt = require('bcrypt');
const passport = require("passport");
// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/addItem", (req,res,next) => {
    const items = {
      description: req.body.itemName,
      type: req.body.itemType,
      img: req.body.itemImage
    }

    db.Item.create(items);
  })


  app.post("/api/signup", (req,res,next)=> {
    req.session.username = req.body.userName;
    
    const oldPw = req.body.password;
    const saltRounds = 10;
    
    const users ={
      username: req.session.username,
      email: req.body.email,
      password: "",
      isCreated: false
    }

    bcrypt.hash(oldPw, saltRounds, (err, hash) => {
    console.log(`hashedPw ${hash}`);
    users.password = hash;
    console.log(`newpw ${users.password}`);
    
    db.User.findOne({where: {username: users.username}}).then(username => {
      //checks username if already in db
        if(!username){
          db.User.findOne({where: {email: users.email}}).then(email => {
            if(!email){
              //checks if email is in the db if it passes it adds new entry to db
              db.User.create(users).then((database)=> {
                const saveID = database.id;
                console.log(`userID: ${saveID}`);
                req.login(database.id, (err)=>{
                  res.send(users.isCreated);
                })
                
              });
              
              
            } else {
              console.log("email already in DB!");
              users.isCreated = true;
              res.send(users.isCreated);
              users.isCreated = false;
            }
          });
        } else {
          console.log("username in DB!");
          users.isCreated = true;
          res.send(users.isCreated);
          users.isCreated = false;
        }
    });
  });
    console.log(`users: ${users.username}`);
    // res.end();
  });

  passport.serializeUser((saveID, done) => {
    done(null, saveID);
});


passport.deserializeUser((saveID, done) => {
    console.log(`deserialized user called`);
    done(null,saveID);
});

  //------------------------------------------------------------------------

  // GET route for getting all of the posts
  app.get("/api/inventory", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Item.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/items/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Item.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbItem) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new item
  app.post("/api/items", function(req, res) {
    db.Item.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting itmes
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // PUT route for updating posts
  app.put("/api/items", function(req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};

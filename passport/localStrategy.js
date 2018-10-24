const User = require("../models/user");
const db = require("../models");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
{
    usernameField: "username"
},
    (username, password, done) => {
    db.User.findOne({where: {username: username}}).then(username => {
        if(!user) {
            return done(null, false, {
                message: "Incorrect username!"
            })
        }
        if(!user.checkPassword(password)) {
            return done(null, false, {
                message: "Incorrect Password"
            })
        }
        return done(null, user);
    })
    }
)

module.exports = strategy;
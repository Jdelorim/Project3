const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
    (username, password, done) => {
        if(err) {
            return done(err);
        } 
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

    }
)

module.exports = strategy;
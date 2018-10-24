const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");

passport.serializeUser((user, done) => {
    console.log(`User-passport: ${User}`);
    done(null, { _id: user._id});
});


passport.deserializeUser((id, done) => {
    console.log(`deserialized user called`);
    done(null,user);
});


passport.use(LocalStrategy);

module.exports = passport;
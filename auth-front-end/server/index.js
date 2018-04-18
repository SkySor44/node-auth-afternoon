const express = require('express');
const session = require('express-session');
require('dotenv').config();
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const students = require('./students.json');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
}))

app.use(passport.initialize());

app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3005/login',
    scope: "openid email profile"
}, function(accessToken, refreshToken, extraParams, profile, done){
        done(null, profile)
}))




app.get('/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/students',
    failureRedirect: '/login',
    connection: 'github'
}))


passport.serializeUser( (user, done) => {
    console.log('serial user',user)
    done(null, {clientID: user.id, email: user._json.email, name: user._json.name});
})

passport.deserializeUser((obj, done) => {
    console.log('deserial user', obj)
    done(null, obj)
})

function authenticated(req, res, next){
    if(req.user) {
        next()
    }  else{ res.sendStatus(401)}
}

app.get('/students', authenticated, (req, res, next)=> {
    res.status(200).send(students)
})








const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
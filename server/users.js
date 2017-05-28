const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');
const ObjectID = require('mongodb').ObjectID;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  const q = { _id: ObjectID(id) };
  db.getUsersDB().findOne(q, (err, user) => {
    if (err) {
      done(err, false);
      return;
    }
    if (!user) {
      done(null, false);
      return;
    }
    done(null, user);
  });
});

passport.use(new LocalStrategy(
  (username, password, done) => {
    const q = { username };
    db.getUsersDB().findOne(q, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (!user) {
        const mess = { message: 'No such user!' };
        return done(mess, false);
      }
      if (user.password !== password) {
        const mess = { message: 'Wrong password!' };
        return done(mess, false);
      }
      return done(null, user);
    });
  }
));

module.exports = (app) => {
  app.post('/login', (req, res) => {
    passport.authenticate('local', (err, user) => {
      if (user) {
        const s = req.session;
        s.user = user;
        s.save();
      }
      return res.status(200).send({ err, user });
    })(req, res);
  });

  app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
    });
  });

  app.get('/user', (req, res) => {
    const user = req.session.user;
    res.send(user);
  });
};

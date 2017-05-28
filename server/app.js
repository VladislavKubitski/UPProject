const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const db = require('./db');
const MongoStore = require('connect-mongo')(expressSession);
const cookieParser = require('cookie-parser');

const app = express();

app.use(expressSession({
  secret: 'MY_SECRET',
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({
    url: 'mongodb://localhost:27017/NEWSPORTAL',
    touchAfter: 10000000,
  }),
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

require('./articles')(app);
require('./users')(app);

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  app.listen(3000, () => {
    console.log('Server listening on port 3000.');
  });
});

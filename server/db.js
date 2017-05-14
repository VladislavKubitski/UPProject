const MongoClient = require('mongodb').MongoClient;

const URL = 'mongodb://localhost:27017/NEWSPORTAL';

let database;

function connect(callBack) {
  MongoClient.connect(URL, (err, db) => {
    if (err) {
      callBack(err);
      return;
    }
    database = db;
    callBack();
  });
}

function getArticlesDB() {
  return database.collection('articles');
}

function getUsersDB() {
  return database.collection('users');
}

module.exports = {
  connect,
  getArticlesDB,
  getUsersDB,
};

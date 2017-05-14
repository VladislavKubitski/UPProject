const db = require('./db');
const ObjectID = require('mongodb').ObjectID;


function getArticles(skip, top, filter, callBack) {
  db.getArticlesDB().find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(top)
    .toArray(callBack);
}

function getArticleId(currentId, callBack) {
  const query = { _id: ObjectID(currentId) };
  db.getArticlesDB().findOne(query, callBack);
}

function createArticle(article, callBack) {
  if (!validateArticle(article)) {
    callBack({ err: 'saving ERROR' });
    return;
  }
  db.getArticlesDB().insertOne(article, callBack);
}

function deleteArticle(currentId, callBack) {
  const query = { _id: ObjectID(currentId) };
  db.getArticlesDB().deleteOne(query, null, callBack);
}

function editArticle(currentId, article, callBack) {
  const query = { _id: ObjectID(currentId) };
  const option = { $set: article };
  db.getArticlesDB().updateOne(query, option, callBack);
}

function validateArticle(article) {
  if (!article) {
    return false;
  }
  const isValideTitle = article.title.length !== 0;
  const isValideSummary = article.summary.length !== 0;
  const isValideContent = article.content.length !== 0;
  return isValideContent && isValideSummary && isValideTitle;
}

module.exports = {
  getArticles,
  getArticleId,
  createArticle,
  deleteArticle,
  editArticle,
};

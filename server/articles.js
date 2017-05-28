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


module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('index.html');
  });


  app.get('/articles', (req, res) => {
    const author = req.query.author;
    const from = Number(req.query.from);
    const to = Number(req.query.to);

    const filter = {
      createdAt: {
        $gte: from || 0,
        $lte: to || Date.now(),
      },
    };
    if (author) {
      filter.author = author;
    }
    const skip = Number(req.query.skip) || 0;
    const top = Number(req.query.top) || 10;
    getArticles(skip, top, filter, (err, array) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send(array);
    });
  });

  app.get('/article/:id', (req, res) => {
    getArticleId(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send(data);
    });
  });

  app.post('/articles', (req, res) => {
    const newArticle = {
      title: req.body.title,
      summary: req.body.summary,
      createdAt: Date.now(),
      author: req.body.author,
      content: req.body.content,
      tags: req.body.tags,
    };
    createArticle(newArticle, (err) => {
      res.sendStatus(err ? 403 : 200);
    });
  });

  app.delete('/articles/:id', (req, res) => {
    deleteArticle(req.params.id, (err) => {
      res.sendStatus(err ? 403 : 200);
    });
  });

  app.put('/articles/:id', (req, res) => {
    const edit = req.body;
    const id = req.params.id;
    editArticle(id, edit, (err) => {
      res.sendStatus(err ? 403 : 200);
    });
  });
};

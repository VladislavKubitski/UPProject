const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const articles = require('./articles');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/articles', (req, res) => {
  const author = req.query.author;
  const from = req.query.from;
  const to = req.query.to;

  const filter = {
    createdAt: {
      $gte: from || 0,
      $lte: to || 8640000000000000,
    },
  };
  if (author) {
    filter.author = author;
  }
  const skip = req.query.skip || 0;
  const top = req.query.top || 10;
  articles.getArticles(skip, top, filter, (err, array) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(array);
  });
});

app.get('/article/:id', (req, res) => {
  articles.getArticleId(req.params.id, (err, data) => {
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
  articles.createArticle(newArticle, (err) => {
    res.sendStatus(err ? 403 : 200);
  });
});

app.delete('/articles/:id', (req, res) => {
  articles.deleteArticle(req.params.id, (err) => {
    res.sendStatus(err ? 403 : 200);
  });
});

app.put('/articles/:id', (req, res) => {
  const edit = req.body;
  const id = req.params.id;
  articles.editArticle(id, edit, (err) => {
    res.sendStatus(err ? 403 : 200);
  });
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  app.listen(3000, () => {
    console.log('Server listening on port 3000.');
  });
});

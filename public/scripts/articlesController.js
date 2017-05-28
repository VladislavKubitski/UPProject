const articlesController = (function () {
  let FILTER = null;
  let skip = 0;
  function displayFirstPage() {
    skip = 0;
    FILTER = null;
    document.getElementById('news-part').style.display = 'block';
    document.getElementById('full-news-container').style.display = 'none';
    document.getElementById('edit-news-container').style.display = 'none';
    document.getElementById('add-news-container').style.display = 'none';
    htmlController.removeArticlesFromDom();
    request.getArticles().then(showArticlesResolve, alert);
  }

  function showArticlesResolve(articles) {
    const addArt = htmlController.addArticle;
    articles.forEach(article => addArt(article));

    const messageBox = document.getElementById('message-about-the-end');
    messageBox.style.visibility = articles[9] ? 'hidden' : 'visible';

    const showMoreButtom = document.getElementById('show-more-button');
    showMoreButtom.style.display = articles[9] ? 'block' : 'none';
  }

  function addNewArticleButton() {
    const newArticle = {
      author: `${document.getElementById('add-news-name-author-input').value}`,
      createdAt: new Date(document.getElementById('add-news-date-input').value),
      title: `${document.getElementById('add-news-title-input').value}`,
      summary: `${document.getElementById('add-news-summary-input').value}`,
      content: `${document.getElementById('add-news-content-input').value}`,
    };
    request.addArticle(newArticle).then(displayFirstPage, alert);
  }

  function editArticle(id) {
    document.getElementById('news-part').style.display = 'none';
    document.getElementById('full-news-container').style.display = 'none';
    document.getElementById('edit-news-container').style.display = 'block';
    request.getArticle(`/article/${id}`).then(editArticleResolve, alert);
  }

  function editArticleResolve(article) {
    document.getElementById('edit-news-date-input').value = article.createdAt;
    document.getElementById('edit-news-id-input').value = `${article._id}`;
    document.getElementById('edit-news-title-input').value = `${article.title}`;
    document.getElementById('edit-news-name-author-input').value = `${article.author}`;
    document.getElementById('edit-news-summary-input').value = `${article.summary}`;
    document.getElementById('edit-news-content-input').value = `${article.content}`;
  }

  function editNewArticleButton() {
    const id = `${document.getElementById('edit-news-id-input').value}`;
    const updateArticle = {
      title: `${document.getElementById('edit-news-title-input').value}`,
      summary: `${document.getElementById('edit-news-summary-input').value}`,
      content: `${document.getElementById('edit-news-content-input').value}`,
    };
    request.updateArticle(`/articles/${id}`, updateArticle).then(displayFirstPage, alert);
  }

  function removeArticle(id) {
    request.removeArticle(`/articles/${id}`).then(displayFirstPage, alert);
  }

  function readFullArticle(id) {
    document.getElementById('news-part').style.display = 'none';
    document.getElementById('full-news-container').style.display = 'block';
    request.getArticle(`/article/${id}`).then(readFullArticleResolve, alert);
  }

  function readFullArticleResolve(article) {
    document.getElementById('full-news-date-p').textContent = htmlController.formatDate(article.createdAt);
    document.getElementById('full-news-title-p').textContent = `${article.title}`;
    document.getElementById('full-news-author-p').textContent = `${article.author}`;
    document.getElementById('full-news-speech-p').textContent = `${article.content}`;
    document.getElementById('full-news-id-p').textContent = `${article._id}`;
  }

  function okFilterShow() {
    document.getElementById('news-part').style.display = 'block';
    document.getElementById('full-news-container').style.display = 'none';
    document.getElementById('edit-news-container').style.display = 'none';
    document.getElementById('add-news-container').style.display = 'none';
    htmlController.removeArticlesFromDom();
    FILTER = {
      author: document.getElementById('news-filter-input-author').value,
      from: new Date(document.getElementById('news-filter-input-from').value),
      to: new Date(document.getElementById('news-filter-input-to').value),
    };
    skip = 0;
    request.getArticles(FILTER, skip).then(okFilterShowResolve, alert);
  }

  function okFilterShowResolve(articles) {
    showArticlesResolve(articles);
    document.getElementById('news-filter').style.right = '-1000px';
    document.getElementById('overlay').style.display = 'none';
  }

  function showMore() {
    skip += 10;
    request.getArticles(FILTER, skip).then(showArticlesResolve, alert);
  }

  return {
    addNewArticleButton,
    editArticle,
    editNewArticleButton,
    removeArticle,
    readFullArticle,
    displayFirstPage,
    okFilterShow,
    showMore,
  };
}());


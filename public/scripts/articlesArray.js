const articlesArray = (function () {
  function displayFirstPage() {
    request.getArticles('/articles').then(showArticlesResolve, showError);
  }
  function showArticlesResolve(articles) {
    const addArt = htmlController.addArticle;
    articles.forEach(article => addArt(article));
  }
  function showError(status) {
    alert(status);
  }

  function addNewArticleButton() {
    const newArticle = {
      author: `${document.getElementById('add-news-name-author-input').value}`,
      createdAt: new Date(document.getElementById('add-news-date-input').value),
      title: `${document.getElementById('add-news-title-input').value}`,
      summary: `${document.getElementById('add-news-summary-input').value}`,
      content: `${document.getElementById('add-news-content-input').value}`,
    };
    request.addArticle(newArticle).then(addNewArticleButtonResolve, showError);
  }
  function addNewArticleButtonResolve() {
    document.getElementById('add-news-container').style.display = 'none';
    document.getElementById('news-part').style.display = 'block';
  }


  function editArticle(id) {
    document.getElementById('news-part').style.display = 'none';
    document.getElementById('full-news-container').style.display = 'none';
    document.getElementById('edit-news-container').style.display = 'block';
    request.getArticle(`/article/${id}`).then(editArticleResolve, showError);
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
    request.updateArticle(`/articles/${id}`, updateArticle).then(editNewArticleButtonResolve, showError);
  }
  function editNewArticleButtonResolve() {
    document.getElementById('edit-news-container').style.display = 'none';
    document.getElementById('news-part').style.display = 'block';
  }

  function removeArticle(id) {
    request.removeArticle(`/articles/${id}`).then(removeArticleResolve, showError);
  }
  function removeArticleResolve() {
    document.getElementById('full-news-container').style.display = 'none';
    document.getElementById('news-part').style.display = 'block';
  }

  function readFullArticle(id) {
    document.getElementById('news-part').style.display = 'none';
    document.getElementById('full-news-container').style.display = 'block';
    request.getArticle(`/article/${id}`).then(readFullArticleResolve, showError);
  }
  function readFullArticleResolve(article) {
    document.getElementById('full-news-date-p').textContent = htmlController.formatDate(article.createdAt);
    document.getElementById('full-news-title-p').textContent = `${article.title}`;
    document.getElementById('full-news-author-p').textContent = `${article.author}`;
    document.getElementById('full-news-speech-p').textContent = `${article.content}`;
    document.getElementById('full-news-id-p').textContent = `${article._id}`;
  }

  function okFilterShow() {
    const filterConfig = {
      author: document.getElementById('news-filter-input-author').value,
      from: new Date(document.getElementById('news-filter-input-from').value),
      to: new Date(document.getElementById('news-filter-input-to').value),
    };
    const query = Object.keys(filterConfig).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filterConfig[key])}`).join('&');
    request.getArticles(`/articles?${query}`).then(okFilterShowResolve, showError);
  }
  function okFilterShowResolve(articles) {
    const addArt = htmlController.addArticle;
    articles.forEach(article => addArt(article));
    document.getElementById('news-filter').style.right = '-250px';
    document.getElementById('overlay').style.display = 'none';
  }



  return {
    addNewArticleButton,
    editArticle,
    editNewArticleButton,
    removeArticle,
    readFullArticle,
    displayFirstPage,
    okFilterShow,
  };
}());


const htmlController = (function () {
  const ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
  const ARTICLE_LIST_NODE = document.querySelector('.news-left-part');

  function removeArticlesFromDom() {
    ARTICLE_LIST_NODE.innerHTML = '';
  }

  function renderArticles(articles) {
    removeArticlesFromDom();
    articles.forEach((article) => {
      addArticle(article);
    });
  }

  function changeUser(nameUser) {
    user = nameUser;
    if (!user) {
      const articlesDelete = document.getElementsByClassName('news-delete');
      const articlesEdit = document.getElementsByClassName('news-edit');
      for (let i = 0; i < articlesDelete.length; i++) {
        articlesDelete[i].style.display = 'none';
        articlesEdit[i].style.display = 'none';
      }
      const articlesAdd = document.getElementsByClassName('news-buttom');
      for (let i = 0; i < articlesAdd.length; i++) {
        articlesAdd[i].style.display = 'none';
      }
      const name = document.getElementById('enter-name1');
      const enter = document.getElementById('enter-enter');
      enter.innerHTML = 'Войти';
      name.style.display = 'none';
    } else {
      const articlesDelete = document.getElementsByClassName('news-delete');
      const articlesEdit = document.getElementsByClassName('news-edit');
      for (let i = 0; i < articlesDelete.length; i++) {
        articlesDelete[i].style.display = 'inline';
        articlesEdit[i].style.display = 'inline';
      }
      const articlesAdd = document.getElementsByClassName('news-buttom');
      for (let i = 0; i < articlesAdd.length; i++) {
        articlesAdd[i].style.display = 'inline';
      }
      const name = document.getElementById('enter-name1');
      const enter = document.getElementById('enter-enter');
      name.style.display = 'inline';
      name.innerHTML = nameUser;
      enter.innerHTML = 'Выйти';
    }
  }

  function renderArticle(article) {
    const template = ARTICLE_TEMPLATE;
    template.content.querySelector('.news-item').id = article._id;
    template.content.querySelector('.news-link').textContent = article.title;
    template.content.querySelector('.news-speech').textContent = article.summary;
    template.content.querySelector('.news-author').textContent = article.author;
    template.content.querySelector('p.news-data').textContent = formatDate(article.createdAt);
    // template.content.querySelector('.tags').textContent = '';
    // article.tags.forEach(function(tag) {
    //   template.content.querySelector('.tags').textContent +=  ' ' + tag;
    // });
    return template.content.querySelector('.news-item').cloneNode(true);
  }
  function addArticle(article) {
    const html = renderArticle(article);
    ARTICLE_LIST_NODE.appendChild(html);
  }

  function formatDate(d) {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${
      d.getHours()}:${d.getMinutes()}`;
  }

  return {
    renderArticles,
    addArticle,
    changeUser,
    removeArticlesFromDom,
    formatDate,
  };
}());

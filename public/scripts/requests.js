const request = (function () {
  function getArticles(url) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      function handler() {
        const articles = JSON.parse(this.response);
        articles.forEach(item => item.createdAt = new Date(item.createdAt));
        resolve(articles);
        oReq.removeEventListener('load', handler);
      }
      oReq.addEventListener('load', handler);
      oReq.open('GET', url);
      oReq.send();
    });
  }

  function addArticle(newArticle) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      function handler() {
        oReq.removeEventListener('load', handler);
        resolve();
      }
      oReq.addEventListener('load', handler);
      oReq.open('POST', '/articles');
      oReq.setRequestHeader('content-type', 'application/json');
      oReq.send(JSON.stringify(newArticle));
    });
  }

  function getArticle(url) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      function handler() {
        const article = JSON.parse(this.response);
        article.createdAt = new Date(article.createdAt);
        resolve(article);
        oReq.removeEventListener('load', handler);
      }
      oReq.addEventListener('load', handler);
      oReq.open('GET', url);
      oReq.send();
    });
  }

  function updateArticle(url, upArticle) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('PUT', url);
      function handler() {
        if (this.status === 200) {
          oReq.removeEventListener('load', handler);
          resolve();
          return;
        }
        reject();
      }
      oReq.addEventListener('load', handler);
      oReq.setRequestHeader('content-type', 'application/json');
      oReq.send(JSON.stringify(upArticle));
    });
  }
  
  function removeArticle(url) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('DELETE', url);
      function handler() {
        if (this.status === 200) {
          oReq.removeEventListener('load', handler);
          resolve();
          return;
        }
        reject();
      }
      oReq.addEventListener('load', handler);
      oReq.send();
    });
  }
  return {
    getArticles,
    addArticle,
    getArticle,
    updateArticle,
    removeArticle,
  };
}());

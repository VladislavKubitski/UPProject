const request = (function () {
  function getArticles(filter, skip = 0, top = 10) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      function handler() {
        const articles = JSON.parse(this.response);
        articles.forEach(item => item.createdAt = new Date(item.createdAt));
        resolve(articles);
        oReq.removeEventListener('load', handler);
      }
      oReq.addEventListener('load', handler);
      const amountQ = `skip=${skip}&top=${top}`;
      const filterQ = filter ? convFilter(filter) : '';
      const url = `/articles?${amountQ}&${filterQ}`;
      oReq.open('GET', url);
      oReq.send();
    });
  }

  function convFilter(filter) {
    const keys = Object.keys(filter);
    const conv = encodeURIComponent;
    return keys.map(key => `${conv(key)}=${conv(filter[key])}`).join('&');
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

  function getUser() {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('GET', '/user');
      function handler() {
        if (this.status === 200) {
          oReq.removeEventListener('load', handler);
          const res = this.responseText;
          if (res) {
            const user = JSON.parse(res);
            resolve(user);
          } else {
            reject();
          }
          return;
        }
        reject();
      }
      oReq.addEventListener('load', handler);
      oReq.send();
    });
  }

  function login(user) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('POST', 'login');
      oReq.setRequestHeader('content-type', 'application/json');

      function handler() {
        if (this.status === 200) {
          oReq.removeEventListener('load', handler);
          const res = JSON.parse(this.responseText);
          if (res.err) reject(res.err.message);
          else resolve(res.user);
          return;
        }
        reject(JSON.parse(this.statusText));
      }
      oReq.addEventListener('load', handler);
      oReq.send(JSON.stringify(user));
    });
  }

  function logout(url) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('POST', 'logout');
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
    login,
    logout,
    getUser,
  };
}());

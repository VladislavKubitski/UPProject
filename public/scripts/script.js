let user = null;

(function () {
  articlesController.displayFirstPage();
  request.getUser().then(userIn, userOut);
}());


function addNews() {
  document.getElementById('news-part').style.display = 'none';
  document.getElementById('edit-news-container').style.display = 'none';
  document.getElementById('add-news-container').style.display = 'block';
  document.getElementById('add-news-name-author-input').value = user;
  document.getElementById('add-news-date-input').value = new Date();
}

function handleBtnClick(event) {
  const id = event.target.offsetParent.id;
  const cn = event.target.className;
  if (cn === 'news-edit') {
    articlesController.editArticle(id);
    return;
  }
  if (cn === 'news-delete') {
    articlesController.removeArticle(id);
    return;
  }
  if (cn === 'read-post-button') {
    articlesController.readFullArticle(id);
  }
}

function deleteButtonFromFull() {
  const id = document.getElementById('full-news-id-p').textContent;
  articlesController.removeArticle(id);
}

function editButtonFromFull() {
  const id = document.getElementById('full-news-id-p').textContent;
  articlesController.editArticle(id);
}

function showFilter() {
  closeAllContainers();
  document.getElementById('news-filter').style.right = '0px';
  document.getElementById('overlay').style.display = 'block';
}

function hideFilter() {
  document.getElementById('news-filter').style.right = '-1000px';
  document.getElementById('overlay').style.display = 'none';
}

function changeUser() {
  closeAllContainers();
  if (!user) {
    document.getElementById('user-enter-container').style.right = '0px';
    document.getElementById('overlay').style.display = 'block';
    return;
  }
  document.getElementById('user-exit-container').style.right = '0px';
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('user-exit-container-name').textContent = user;
}

function hideEnterContainer() {
  document.getElementById('user-enter-container').style.right = '-1000px';
  document.getElementById('overlay').style.display = 'none';
}

function hideExitContainer() {
  document.getElementById('user-exit-container').style.right = '-1000px';
  document.getElementById('overlay').style.display = 'none';
}

function closeAllContainers() {
  hideEnterContainer();
  hideExitContainer();
  hideFilter();
}


function loginButtonClickHandler() {
  const username = `${document.getElementById('user-enter-login-input').value}`;
  const password = `${document.getElementById('user-enter-password-input').value}`;
  request.login({ username, password })
    .then(userIn, alert);
}

function logoutButtonClickHandler() {
  request.logout()
    .then(userOut, alert);
}

function userIn(userObj) {
  document.getElementById('enter-add').style.display = 'block';
  document.getElementById('user-enter-container').style.right = '-1000px';
  document.getElementById('overlay').style.display = 'none';
  user = userObj.username;

  const delBs = document.querySelectorAll('.user-buttons');
  [].forEach.call(delBs, item => item.style.visibility = 'visible');

  const temp = document.querySelector('#template-article-list-item').content;
  temp.querySelector('.user-buttons').style.visibility = 'visible';
}

function userOut(userObj) {
  user = null;
  document.getElementById('enter-add').style.display = 'none';
  document.getElementById('user-exit-container').style.right = '-1000px';
  document.getElementById('overlay').style.display = 'none';

  const delBs = document.querySelectorAll('.user-buttons');
  [].forEach.call(delBs, item => item.style.visibility = 'hidden');

  const temp = document.querySelector('#template-article-list-item').content;
  temp.querySelector('.user-buttons').style.visibility = 'hidden';
}

function okFilter() {
  htmlController.removeArticlesFromDom();
  articlesController.okFilterShow();
}

document.querySelector('.news-left-part')
  .addEventListener('click', handleBtnClick);

document.getElementById('add-news-button')
  .addEventListener('click', articlesController.addNewArticleButton);

document.getElementById('edit-news-button')
  .addEventListener('click', articlesController.editNewArticleButton);

document.getElementById('show-more-button')
  .addEventListener('click', articlesController.showMore);

document.getElementById('picture-logo')
  .addEventListener('click', articlesController.displayFirstPage);






// let user = 'Кубицкий В.О.';
let user = null;

(function () {
  articlesArray.displayFirstPage();
  checkUser();
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
  if (event.target.className === 'news-edit') {
    articlesArray.editArticle(id);
    return;
  }
  if (event.target.className === 'news-delete') {
    articlesArray.removeArticle(id);
    return;
  }
  if (event.target.className === 'read-post-button') {
    articlesArray.readFullArticle(id);
  }
}

function deleteButtonFromFull() {
  const id = document.getElementById('full-news-id-p').textContent;
  articlesArray.removeArticle(id);
}

function editButtonFromFull() {
  const id = document.getElementById('full-news-id-p').textContent;
  articlesArray.editArticle(id);
}

function showFilter() {
  document.getElementById('news-filter').style.right = '0px';
  document.getElementById('overlay').style.display = 'block';
}

function hideFilter() {
  document.getElementById('news-filter').style.right = '-250px';
  document.getElementById('overlay').style.display = 'none';
}

function checkUser() {
  if (!user) {
    document.getElementById('enter-add').style.display = 'none';

    const buttons = document.getElementsByClassName('news-delete');
    // console.log(buttons);
    // console.log(buttons.length);
    // for (let i = 0; i < buttons.length; i += 1) {
    //   console.log(i);
    //   buttons[i].style.display = 'none';
    // }
    // console.log(buttons);
    // // Array.prototype.filter.call(buttons, (button) => {
    // //   console.log('1');
    // //   button.style.display = 'none';
    // // });
    // buttons = Array.prototype.slice.call(buttons);
    // console.log(buttons.length);
    // for (let i = 0; i < buttons.length; i += 1) {
    //   console.log(i);
    //   buttons[i].style.display = 'none';
    // }
  }
}

function changeUser() {
  if (!user) {
    document.getElementById('user-enter-container').style.right = '0px';
    document.getElementById('overlay').style.display = 'block';
  } else {
    document.getElementById('user-exit-container').style.right = '0px';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('user-exit-container-name').textContent = user;
  }
}
function hideEnterContainer() {
  document.getElementById('user-enter-container').style.right = '-1000px';
  document.getElementById('overlay').style.display = 'none';
}
function hideExitContainer() {
  document.getElementById('user-exit-container').style.right = '-1000px';
  document.getElementById('overlay').style.display = 'none';
}
function enterAndExitHide() {
  if (!user) {
    user = `${document.getElementById('user-enter-login-input').value}`;
    document.getElementById('enter-add').style.display = 'block';
    document.getElementById('user-enter-container').style.right = '-1000px';
    document.getElementById('overlay').style.display = 'none';
  } else {
    user = null;
    document.getElementById('enter-add').style.display = 'none';
    document.getElementById('user-exit-container').style.right = '-1000px';
    document.getElementById('overlay').style.display = 'none';
  }
}

function okFilter() {
  htmlController.removeArticlesFromDom();
  articlesArray.okFilterShow();
}

document.querySelector('.news-left-part').addEventListener('click', handleBtnClick);
document.getElementById('add-news-button').addEventListener('click', articlesArray.addNewArticleButton);
document.getElementById('edit-news-button').addEventListener('click', articlesArray.editNewArticleButton);


// function handleDeleteBtnClick(event) {
//   if (event.target.className === 'news-delete') {
//       var articleNodeToDelete = event.target.parentElement.parentElement.parentElement;
//       var dateFilter = articleNodeToDelete.childNodes[1].childNodes[1].innerHTML;

//       for (var i = 0; i < articleController.articles.length; i++) {
//           if (dateFilter === htmlController.formatDate(articleController.articles[i].createdAt)) {
//               articleNow = articleController.articles[i];
//             }
//         }
//       removeArticle(articleNow.id);
//     }
//   else if (event.target.className === 'news-edit') {
//             var articleNodeToEdit = event.target.parentElement.parentElement.parentElement;
//             document.getElementById('news-part').style.display = 'none';
//             document.getElementById('edit-news-container').style.display = 'block';

//             var dateFilter = articleNodeToEdit.childNodes[1].childNodes[1].innerHTML;

//             for (var i = 0; i < articleController.articles.length; i++) {
//                 if (dateFilter === htmlController.formatDate(articleController.articles[i].createdAt)) {
//                     articleNow = articleController.articles[i];
//                 }
//             }
//             document.getElementById('edit-news-date-input').value = articleNow.createdAt;
//             document.getElementById('edit-news-id-input').value =  '' + articleNow.id;
//             document.getElementById('edit-news-title-input').value =  '' + articleNow.title;
//             document.getElementById('edit-news-name-author-input').value =  '' + articleNow.author;
//             document.getElementById('edit-news-summary-input').value =  '' + articleNow.summary;
//             document.getElementById('edit-news-content-input').value =  '' + articleNow.content;
//         }
//         else {
//             if (event.target.className === 'read-post-button') {
//                 document.getElementById('news-part').style.display = 'none';
//                 document.getElementById('full-news-container').style.display = 'block';
//                 var articleNodeToDelete = event.target.parentElement.parentElement;
//                 var dateFilter = articleNodeToDelete.childNodes[1].childNodes[1].innerHTML;
//                 for (var i = 0; i < articleController.articles.length; i++) {
//                     if (dateFilter === htmlController.formatDate(articleController.articles[i].createdAt)) {
//                         articleNow = articleController.articles[i];
//                     }
//                 }
//                 document.getElementById('full-news-date-p').textContent = htmlController.formatDate(articleNow.createdAt);
//                 document.getElementById('full-news-title-p').textContent =  '' + articleNow.title;
//                 document.getElementById('full-news-author-p').textContent =  '' + articleNow.author;
//                 document.getElementById('full-news-speech-p').textContent =  '' + articleNow.content;
//             }
//         }
// }

/* const itemm = {
  id: '21',
  title: 'LLGGGGGGG',
  summary: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко.',
  createdAt: new Date('2015-01-26T23:00:00'),
  author: 'Иванов А.В.',
  content: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко. Ученые из лаборатории Laboratoire de Physique et Mécanique des Milieux Hétérogènes (CNRS/ESPCI Paris/UPMC/Université Paris Diderot) проанализировали доступные снимки и произвели моделирование выделения газов с поверхности кометы, чтобы объяснить наблюдаемые явления. Исследователи показали, что большая разница в давлениях газов между освещенной и неосвещенной солнечными лучами сторонами кометы приводит к формированию ветров, способных переносить частицы пыли и формировать дюны.',
  tags: ['#Photo', '#USSR', '#Mars'],
};
const itemmm = {
  id: '22',
  title: 'PPPPPPPP',
  summary: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко.',
  createdAt: new Date('2017-01-26T23:00:00'),
  author: 'Иванов А.В.',
  content: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко. Ученые из лаборатории Laboratoire de Physique et Mécanique des Milieux Hétérogènes (CNRS/ESPCI Paris/UPMC/Université Paris Diderot) проанализировали доступные снимки и произвели моделирование выделения газов с поверхности кометы, чтобы объяснить наблюдаемые явления. Исследователи показали, что большая разница в давлениях газов между освещенной и неосвещенной солнечными лучами сторонами кометы приводит к формированию ветров, способных переносить частицы пыли и формировать дюны.',
  tags: ['#Photo', '#USSR', '#Mars'],
};

htmlController.init();
const globalData = {
  skip: 0,
  top: 0,
  filterConfig: null,
  masArticles: articleController.articles,
};
function addArticle(article) {
  articleController.addArticle(article);


  const articles = articleController.getArticles(globalData.skip, globalData.top, globalData.filterConfigfilterConfig);
  htmlController.renderArticles(articles);

}

function removeArticle(id) {
  articleController.removeArticle(id);

  const articles = articleController.getArticles(globalData.skip, globalData.top, globalData.filterConfigfilterConfig);
  htmlController.renderArticles(articles);
}
function editArticle(id, article) {
  articleController.editArticle(id, article);


  const articles = articleController.getArticles(globalData.skip, globalData.top, globalData.filterConfigfilterConfig);
  htmlController.renderArticles(articles);
}

function changeUser(nameUser) {
  htmlController.changeUser(nameUser);
}

function showFilter() {
  document.getElementById('news-filter').style.right = '0px';
  document.getElementById('overlay').style.display = 'block';
}

function hideFilter() {
  document.getElementById('news-filter').style.right = '-250px';
  document.getElementById('overlay').style.display = 'none';
}


function addNewButton() {
  const newItem = {
    author: `${document.getElementById('add-news-name-author-input').value}`,
    id: `${document.getElementById('add-news-id-input').value}`,
    createdAt: new Date(document.getElementById('add-news-date-input').value),
    title: `${document.getElementById('add-news-title-input').value}`,
    summary: `${ document.getElementById('add-news-summary-input').value}`,
    content: `${document.getElementById('add-news-content-input').value}`,
  };
  globalID++;
  addArticle(newItem);
  document.getElementById('news-part').style.display = 'block';
  document.getElementById('add-news-container').style.display = 'none';
}


document.getElementById('overlay').addEventListener('click', hideFilter);


const pagination = (function () {
  let ITEMS_PER_PAGE = 10; // статей на 1-ой странице
  let total; // всего статей
  let currentPage; // текущая страница
  let showMoreButton;
  let showMoreCallback; // функция, которую вызывать, когда произошел клик по кнопке


  function init(_total, _showMoreCallback) {
    currentPage = 1;
    total = _total;
    showMoreCallback = _showMoreCallback;
    showMoreButton = document.getElementById('show-more-button');
    showMoreButton.addEventListener('click', handleShowMoreClick);


    showOrHideMoreButton();


    return getParams();
  }

  function handleShowMoreClick() {
    const paginationParams = nextPage();
    showMoreCallback(paginationParams.skip, paginationParams.top);
  }

  function getTotalPages() {
    return Math.ceil(total / ITEMS_PER_PAGE);
  }

  function nextPage() {

    currentPage += 1;
    ITEMS_PER_PAGE = ITEMS_PER_PAGE;

    showOrHideMoreButton();

    return getParams();
  }

  function getParams() {
    globalData.skip = (currentPage - 1) * ITEMS_PER_PAGE;
    globalData.top = ITEMS_PER_PAGE;
    return {
        top: ITEMS_PER_PAGE,
        skip: (currentPage - 1) * ITEMS_PER_PAGE,
      };
  }

  function showOrHideMoreButton() {
    showMoreButton.hidden = getTotalPages() <= currentPage;
  }

  return {
    init,
  };

}());


document.addEventListener('DOMContentLoaded', startApp);

let articleNow;
const articleListNode = document.querySelector('.news-left-part');
articleListNode.addEventListener('click', handleDeleteBtnClick);
function handleDeleteBtnClick(event) {
  if (event.target.className === 'news-delete') {
    var articleNodeToDelete = event.target.parentElement.parentElement.parentElement;
    var dateFilter = articleNodeToDelete.childNodes[1].childNodes[1].innerHTML;

    for (var i = 0; i < articleController.articles.length; i++) {
        if (dateFilter === htmlController.formatDate(articleController.articles[i].createdAt)) {
            articleNow = articleController.articles[i];
          }
      }
    removeArticle(articleNow.id);
  }
  else if (event.target.className === 'news-edit') {
    let articleNodeToEdit = event.target.parentElement.parentElement.parentElement;
    document.getElementById('news-part').style.display = 'none';
    document.getElementById('edit-news-container').style.display = 'block';

    var dateFilter = articleNodeToEdit.childNodes[1].childNodes[1].innerHTML;

    for (var i = 0; i < articleController.articles.length; i++) {
              if (dateFilter === htmlController.formatDate(articleController.articles[i].createdAt)) {
                  articleNow = articleController.articles[i];
                }
            }
    document.getElementById('edit-news-date-input').value = articleNow.createdAt;
    document.getElementById('edit-news-id-input').value = `${  articleNow.id}`;
    document.getElementById('edit-news-title-input').value = `${  articleNow.title}`;
    document.getElementById('edit-news-name-author-input').value = `${  articleNow.author}`;
    document.getElementById('edit-news-summary-input').value = `${  articleNow.summary}`;
    document.getElementById('edit-news-content-input').value = `${  articleNow.content}`;
  }
  else if (event.target.className === 'read-post-button') {
                document.getElementById('news-part').style.display = 'none';
                document.getElementById('full-news-container').style.display = 'block';
                var articleNodeToDelete = event.target.parentElement.parentElement;
                var dateFilter = articleNodeToDelete.childNodes[1].childNodes[1].innerHTML;
                for (var i = 0; i < articleController.articles.length; i++) {
                    if (dateFilter === htmlController.formatDate(articleController.articles[i].createdAt)) {
                        articleNow = articleController.articles[i];
                    }
                }
                document.getElementById('full-news-date-p').textContent = htmlController.formatDate(articleNow.createdAt);
                document.getElementById('full-news-title-p').textContent =  '' + articleNow.title;
                document.getElementById('full-news-author-p').textContent =  '' + articleNow.author;
                document.getElementById('full-news-speech-p').textContent =  '' + articleNow.content;
            }
}

function editNews() {
  articleNow.title = document.getElementById('edit-news-title-input').value;
  articleNow.content = document.getElementById('edit-news-content-input').value;
  articleNow.summary = document.getElementById('edit-news-summary-input').value;
  editArticle(articleNow.id, articleNow);
  document.getElementById('news-part').style.display = 'block';
  document.getElementById('edit-news-container').style.display = 'none';
}

function editButtonFromFull() {
  document.getElementById('full-news-container').style.display = 'none';
  document.getElementById('edit-news-container').style.display = 'block';
  document.getElementById('edit-news-date-input').value = articleNow.createdAt;
  document.getElementById('edit-news-id-input').value = `${articleNow.id}`;
  document.getElementById('edit-news-title-input').value = `${articleNow.title}`;
  document.getElementById('edit-news-name-author-input').value = `${articleNow.author}`;
  document.getElementById('edit-news-summary-input').value = `${ articleNow.summary}`;
  document.getElementById('edit-news-content-input').value = `${ articleNow.content}`;
}

function deleteButtonFromFull() {
  document.getElementById('full-news-container').style.display = 'none';
  removeArticle(articleNow.id);
  document.getElementById('news-part').style.display = 'block';

}


const filter = (function () {
  let form;
  let submitButton;
  let filterChangedCallback;
  function init(_filterChangedCallback) {
    form = document.forms.filter;
    submitButton = form.elements.submit;
    submitButton.addEventListener('click', handleSubmitClick);
    filterChangedCallback = _filterChangedCallback;
    return getFilter();
  }
  function getFilter() {
    const objectNow = {
        author: undefined,
        fromDate: undefined,
        toDate: undefined,
      };
    const authorSelect = form.elements.author;
    if (authorSelect.value) {
        objectNow.author = authorSelect.value;
      }
    else {
        delete objectNow.author;
      }
    if (form.elements.dateFrom.value) {
        objectNow.fromDate = new Date(form.elements.dateFrom.value);
      }
    else {
        delete objectNow.fromDate;
      }
    if (form.elements.dateTo.value) {
        objectNow.toDate = new Date(form.elements.dateTo.value);
      }
    else {
        delete objectNow.toDate;
      }
    return objectNow;
  }
  function handleSubmitClick() {
    return filterChangedCallback(getFilter());
  }
  return {
    init,
    getFilter,
  };
}());

function startApp() {


//    if (JSON.parse(localStorage.getItem('articles'))) {
//        articleController.articles = JSON.parse(localStorage.getItem('articles'));
//        globalData.masArticles = articleController.articles;
//    }


  htmlController.init();

  const filterConfig = filter.init(renderArticlesWithFilterConfig);
  globalData.filter = filterConfig;

  renderArticlesWithFilterConfig(filterConfig);

  function renderArticlesWithFilterConfig(filterConfig) {
    htmlController.removeArticlesFromDom();
    const total = articleController.getArticlesCount(filterConfig);
    const paginationParams = pagination.init(total, (skip, top) => {
        renderArticles(skip, top, filterConfig);
      });
    renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
  }


  function renderArticles(skip, top, filterConfig) {
    const articles = articleController.getArticles(skip, top, filterConfig);
    htmlController.renderArticles(articles);
  }
}*/

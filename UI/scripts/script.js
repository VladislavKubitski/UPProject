var user = 'Кубицкий В.О.';
var globalID = 23;


var itemm = {
  id: '21',
  title: 'LLGGGGGGG',
  summary: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко.',
  createdAt: new Date('2015-01-26T23:00:00'),
  author: 'Иванов А.В.',
  content: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко. Ученые из лаборатории Laboratoire de Physique et Mécanique des Milieux Hétérogènes (CNRS/ESPCI Paris/UPMC/Université Paris Diderot) проанализировали доступные снимки и произвели моделирование выделения газов с поверхности кометы, чтобы объяснить наблюдаемые явления. Исследователи показали, что большая разница в давлениях газов между освещенной и неосвещенной солнечными лучами сторонами кометы приводит к формированию ветров, способных переносить частицы пыли и формировать дюны.',
  tags: ['#Photo', '#USSR', '#Mars']
};
var itemmm = {
  id: '22',
  title: 'PPPPPPPP',
  summary: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко.',
  createdAt: new Date('2017-01-26T23:00:00'),
  author: 'Иванов А.В.',
  content: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко. Ученые из лаборатории Laboratoire de Physique et Mécanique des Milieux Hétérogènes (CNRS/ESPCI Paris/UPMC/Université Paris Diderot) проанализировали доступные снимки и произвели моделирование выделения газов с поверхности кометы, чтобы объяснить наблюдаемые явления. Исследователи показали, что большая разница в давлениях газов между освещенной и неосвещенной солнечными лучами сторонами кометы приводит к формированию ветров, способных переносить частицы пыли и формировать дюны.',
  tags: ['#Photo', '#USSR', '#Mars']
};

htmlController.init();
var globalData = {
  skip: 0,
  top: 0,
  filterConfig: null,
  masArticles: articleController.articles
};
function addArticle(article) {
  articleController.addArticle(article);
//   localStorage.setItem('articles', JSON.stringify(articleController.articles));
  
  var articles = articleController.getArticles(globalData.skip, globalData.top, globalData.filterConfigfilterConfig);      
  htmlController.renderArticles(articles);
  
}

function removeArticle(id) {
  articleController.removeArticle(id);
//   localStorage.setItem('articles', JSON.stringify(articleController.articles));
  
  var articles = articleController.getArticles(globalData.skip, globalData.top, globalData.filterConfigfilterConfig); 
  htmlController.renderArticles(articles);
}
function editArticle(id, article) {
  articleController.editArticle(id, article);
//   localStorage.setItem('articles', JSON.stringify(articleController.articles));
  
  var articles = articleController.getArticles(globalData.skip, globalData.top, globalData.filterConfigfilterConfig);      
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

function addNews() {
  document.getElementById('news-part').style.display = 'none';
  document.getElementById('edit-news-container').style.display = 'none';
  document.getElementById('add-news-container').style.display = 'block';
  document.getElementById('add-news-name-author-input').value = user;
  document.getElementById('add-news-date-input').value =  new Date();
  document.getElementById('add-news-id-input').value =  '' + globalID;
}

function addNewButton () {
  var newItem = {
    author: '' + document.getElementById('add-news-name-author-input').value,
    id: '' + document.getElementById('add-news-id-input').value,
    createdAt: new Date(document.getElementById('add-news-date-input').value),
    title: '' + document.getElementById('add-news-title-input').value,
    summary: '' + document.getElementById('add-news-summary-input').value,
    content: '' + document.getElementById('add-news-content-input').value
  }
  globalID++;
  addArticle(newItem);
  document.getElementById('news-part').style.display = 'block';
  document.getElementById('add-news-container').style.display = 'none';
}


document.getElementById('overlay').addEventListener('click', hideFilter);


var pagination = (function () {
    var ITEMS_PER_PAGE = 10; // статей на 1-ой странице
    var total; // всего статей
    var currentPage; // текущая страница
    var showMoreButton;
    var showMoreCallback; // функция, которую вызывать, когда произошел клик по кнопке

    
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
        var paginationParams = nextPage();
        showMoreCallback(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        return Math.ceil(total / ITEMS_PER_PAGE);
    }

    function nextPage() {

        currentPage = currentPage + 1;
        ITEMS_PER_PAGE = ITEMS_PER_PAGE;

        showOrHideMoreButton();
         
        return getParams();
    }

    function getParams() {
       globalData.skip = (currentPage - 1) * ITEMS_PER_PAGE;
       globalData.top = ITEMS_PER_PAGE;
        return {
            top: ITEMS_PER_PAGE,
            skip: (currentPage - 1) * ITEMS_PER_PAGE
        };
    }

    function showOrHideMoreButton() {
        showMoreButton.hidden = getTotalPages() <= currentPage;
    }

    return {
        init: init
    }

}());


document.addEventListener('DOMContentLoaded', startApp);

var articleNow;
var articleListNode = document.querySelector('.news-left-part');
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
    else {
        if (event.target.className === 'news-edit') {
            var articleNodeToEdit = event.target.parentElement.parentElement.parentElement;
            document.getElementById('news-part').style.display = 'none';
            document.getElementById('edit-news-container').style.display = 'block';
            
            var dateFilter = articleNodeToEdit.childNodes[1].childNodes[1].innerHTML;
            
            for (var i = 0; i < articleController.articles.length; i++) {
                if (dateFilter === htmlController.formatDate(articleController.articles[i].createdAt)) {
                    articleNow = articleController.articles[i];
                }
            }
            document.getElementById('edit-news-date-input').value = articleNow.createdAt;
            document.getElementById('edit-news-id-input').value =  '' + articleNow.id;
            document.getElementById('edit-news-title-input').value =  '' + articleNow.title;
            document.getElementById('edit-news-name-author-input').value =  '' + articleNow.author;
            document.getElementById('edit-news-summary-input').value =  '' + articleNow.summary;
            document.getElementById('edit-news-content-input').value =  '' + articleNow.content;
        }
        else {
            if (event.target.className === 'read-post-button') {
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
    }
}

function editNews (){
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
    document.getElementById('edit-news-id-input').value =  '' + articleNow.id;
    document.getElementById('edit-news-title-input').value =  '' + articleNow.title;
    document.getElementById('edit-news-name-author-input').value =  '' + articleNow.author;
    document.getElementById('edit-news-summary-input').value =  '' + articleNow.summary;
    document.getElementById('edit-news-content-input').value =  '' + articleNow.content;
}

function deleteButtonFromFull() {
    document.getElementById('full-news-container').style.display = 'none';
    removeArticle(articleNow.id);
    document.getElementById('news-part').style.display = 'block';

}


var filter = (function () {
    var form;
    var submitButton;
    var filterChangedCallback;
    function init(_filterChangedCallback) {
        form = document.forms.filter;
        submitButton = form.elements.submit;
        submitButton.addEventListener('click', handleSubmitClick);
        filterChangedCallback = _filterChangedCallback;
        return getFilter();
    }
    function getFilter() {
        var objectNow = {
            author: undefined,
            fromDate: undefined,
            toDate: undefined
        };
        var authorSelect = form.elements.author;
        if (authorSelect.value ) {
            objectNow.author = authorSelect.value;
        }
        else {
            delete objectNow.author;
        }   
       if (form.elements.dateFrom.value ) {
           objectNow.fromDate = new Date(form.elements.dateFrom.value);
       }
       else {
            delete objectNow.fromDate;
       }  
       if (form.elements.dateTo.value ) {
           objectNow.toDate = new Date (form.elements.dateTo.value);
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
        init: init,
        getFilter: getFilter
    };
}());

function startApp() {
    

//    if (JSON.parse(localStorage.getItem('articles'))) {
//        articleController.articles = JSON.parse(localStorage.getItem('articles'));
//        globalData.masArticles = articleController.articles;
//    }

   
   htmlController.init();
   
    var filterConfig = filter.init(renderArticlesWithFilterConfig);
    globalData.filter = filterConfig;

    renderArticlesWithFilterConfig(filterConfig);

    function renderArticlesWithFilterConfig(filterConfig) {
        htmlController.removeArticlesFromDom();
        var total = articleController.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }


    function renderArticles(skip, top, filterConfig) {
        var articles = articleController.getArticles(skip, top, filterConfig);
        htmlController.renderArticles(articles);
    }
}



var user = 'Владислав';

var articlesModuleCreater = function () {
var articles = [
  {
    id: '4',
    title: 'Новая авиакосмическая фирма предлагает высотные воздушные шары',
    summary: 'Частная компания World View Enterprises, которая планирует продавать туристические путевки в высокие слои атмосферы, к границе с космосом.',
    createdAt: new Date('2016-02-26T23:00:00'),
    author: 'Иванов А.В.',
    content: 'Частная компания World View Enterprises, которая планирует продавать туристические путевки в высокие слои атмосферы, к границе с космосом, на борту воздушного шара, объявила об открытии новой штаб-квартиры и объединенного с ней космодрома в г. Тусон, штат Аризона, США.',
    tags: ['#Space', '#USA','#Science']
   },
   {
    id: '2',
    title: 'Космоплан SpaceShipTwo успешно выполняет третий по счету планирующий полет',
    summary: 'Суборбитальный самолет SpaceShipTwo компании Virgin Galactic успешно выполнил свой третий по счету планирующий полет в пятницу',
    createdAt: new Date('2016-01-26T23:00:00'),
    author: 'Петров А.В.',
    content: 'Суборбитальный самолет SpaceShipTwo компании Virgin Galactic успешно выполнил свой третий по счету планирующий полет в пятницу, 24 февраля, ознаменовав также первый полет за штурвалом одного из бывших астронавтов НАСА.',
   	tags: ['#Mars', '#NASA']
   },
   {
    id: '3',
    title: 'ОАЭ объявили о намерениях построить город на Марсе',
    summary: 'Объединенные Арабские Эмираты (ОАЭ) намерены осваивать Марс, и помимо запланированной отправки орбитального аппарата к Красной планете ближневосточное государство',
    createdAt: new Date('2016-01-30T23:00:00'),
    author: 'Сидоров А.В.',
    content: 'Объединенные Арабские Эмираты (ОАЭ) намерены осваивать Марс, и помимо запланированной отправки орбитального аппарата к Красной планете ближневосточное государство намерено основать первое человеческое поселение на Марсе к 2117 г.',
   	tags: ['#Earth', '#Photo']
   },
   {
    id: '1',
    title: 'Удивительные дюны на поверхности кометы Чурюмова-Герасименко',
    summary: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко.',
    createdAt: new Date('2015-10-23T23:00:00'),
    author: 'Иванов А.В.',
    content: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко. Ученые из лаборатории Laboratoire de Physique et Mécanique des Milieux Hétérogènes (CNRS/ESPCI Paris/UPMC/Université Paris Diderot) проанализировали доступные снимки и произвели моделирование выделения газов с поверхности кометы, чтобы объяснить наблюдаемые явления. Исследователи показали, что большая разница в давлениях газов между освещенной и неосвещенной солнечными лучами сторонами кометы приводит к формированию ветров, способных переносить частицы пыли и формировать дюны.',
   	tags: ['#NASA']
   },
   {
   id: '16',
    title: 'Новое исследование демонстрирует, что мантия Марса сложнее, чем считалось',
    summary: 'Мантия Марса может иметь более сложную структуру, чем считалось ранее. В новом исследовании ученые из Университета штата Луизиана (Louisiana State University, LSU)',
    createdAt: new Date('2015-09-26T23:00:00'),
    author: 'Кубицкий А.В.',
    content: 'Мантия Марса может иметь более сложную структуру, чем считалось ранее. В новом исследовании ученые из Университета штата Луизиана (Louisiana State University, LSU), США, раскрывают подробности о геохимических изменениях, происходящих со временем в потоках лавы, наблюдаемых на поверхности планеты в области Элизий, крупном вулканическом районе марсианской поверхности.',
    tags: ['#Space', '#USA','#Science','#Photo']
   },
   {
    id: '7',
    title: 'Гигантская космическая туманность стала загадкой для ученых',
    summary: 'Астрономы обнаружили гигантский, сверкающий шар из газа в далекой от нас части Вселенной, при этом поблизости не наблюдается ни одного источника излучения, способного освещать эту туманность.',
    createdAt: new Date('2011-01-26T23:00:00'),
    author: 'Ломоносов А.В.',
	content: 'Астрономы обнаружили гигантский, сверкающий шар из газа в далекой от нас части Вселенной, при этом поблизости не наблюдается ни одного источника излучения, способного освещать эту туманность. Называемый «гигантской Лайман-альфа туманностью» (enormous Lyman-alpha nebula, ELAN), этот объект является самым ярким и одним из крупнейших объектов этого редкого рода, в котором по состоянию на сегодняшний день насчитывается всего лишь несколько представителей.',
   	tags: ['#Mars', '#NASA']
   },

   {
    id: '20',
    title: 'НАСА взвешивает риски отправки экипажа на борту новой сверхтяжелой ракетой',
    summary: 'НАСА рассматривает возможность отправки астронавтов в первый полет на борту новой сверхтяжелой ракеты,',
    createdAt: new Date('2012-03-30T23:00:00'),
    author: 'Сидоров А.В.',
    content: 'НАСА рассматривает возможность отправки астронавтов в первый полет на борту новой сверхтяжелой ракеты, предназначенной в конечном счете для отправки космонавтов к Марсу.',
   	tags: ['#Earth', '#Photo']
   },

   {
    id: '11',
    title: 'Обнаружен самый медленный аккрецирующий миллисекундный рентгеновский пульсар',
    summary: 'Астрономы разглядели самый медленновращающийся аккрецирующий миллисекундный рентгеновский пульсар в рентгеновском источнике, известном как IGR J17062−6143.',
    createdAt: new Date('2014-04-25T23:00:00'),
    author: 'Иванов А.В.',
    content: 'Астрономы разглядели самый медленновращающийся аккрецирующий миллисекундный рентгеновский пульсар в рентгеновском источнике, известном как IGR J17062−6143. Анализируя данные, собранные при помощи космического аппарата Rossi X-ray Timing Explorer (RXTE), исследователи обнаружили, что этот источник пульсирует с частотой 163,65 Герц.',
   	tags: ['#NASA','#Earth']
   },

   {
    id: '14',
    title: 'В группе NGC 5044 обнаружена первая сверхкомпактная карликовая галактика',
    summary: 'Команда астрономов под руководством Фавио Файфера (Favio Faifer) из Национального университета Ла-Платы, Аргентина, открыли первую сверхкомпактную карликовую галактику',
    createdAt: new Date('2014-01-16T23:00:00'),
    author: 'Иванов А.В.',
    content: 'Команда астрономов под руководством Фавио Файфера (Favio Faifer) из Национального университета Ла-Платы, Аргентина, открыли первую сверхкомпактную карликовую галактику (ultra-compact dwarf (UCD) galaxy) внутри яркой в рентгеновском диапазоне группы галактик, известной как NGC 5044.',
    tags: ['#Space', '#USA','#Science']
   },

   {
    id: '12',
    title: 'Компания SpaceX намерена отправить двух человек к Луне в следующем году',
    summary: 'Компания SpaceX объявила о намерениях отправить к Луне в следующем году двух человек. Руководитель авиакосмической компании Илон Маск (Elon Musk) объявил эти удивительные новости вчера, в понедельник.',
    createdAt: new Date('2011-02-14T23:00:00'),
    author: 'Петров А.В.',
    content: 'Компания SpaceX объявила о намерениях отправить к Луне в следующем году двух человек. Руководитель авиакосмической компании Илон Маск (Elon Musk) объявил эти удивительные новости вчера, в понедельник. Эти два человека – которые знакомы друг с другом – обратились к руководству компании с просьбой отправить их в космический полет к Луне продолжительностью около одной недели. Маск не раскрыл подробностей о личностях обратившихся или о стоимости такой «увеселительной поездки». Он лишь сказал, что будущие космические туристы уже внесли «значительный» депозит.',
   	tags: ['#Mars', '#NASA','#Photo']
   },

   {
    id: '9',
    title: 'Установлена природа загадочных звуков, возникающих при появлении метеора в небе',
    summary: 'Необычные свист и треск, вызываемые некоторыми метеорами, появляющимися на небе, наконец могут получить окончательное объяснение.',
    createdAt: new Date('2014-02-20T23:00:00'),
    author: 'Сидоров А.В.',
    content: 'Эти негромкие звуки, вероятно, формируются, когда яркие импульсы света, идущего со стороны метеора, разогревают объекты, находящиеся на земле под ним, говорится в новом исследовании. Эти объекты – например, листья или волосы – излучают тепловую энергию в окружающий их воздух, в результате чего формируются волны давления - чем и является, по сути, звук.',
   	tags: ['#Earth', '#Photo']
   },

   {
    id: '15',
    title: 'НАСА покупает у «Боинга» места для астронавтов на борту корабля «Союз»',
    summary: 'НАСА без лишнего шума подписало договор с фирмой «Боинг» о покупке до пяти дополнительных мест на борту российского космического корабля «Союз»',
    createdAt: new Date('2015-06-26T23:00:00'),
    author: 'Иванов А.В.',
    content: 'НАСА без лишнего шума подписало договор с фирмой «Боинг» о покупке до пяти дополнительных мест на борту российского космического корабля «Союз», который сможет произвести доставку дополнительных представителей американского космического агентства к Международной космической станции (МКС), что даст небольшую отсрочку для программы пилотируемых перевозок астронавтов силами частных американских авиакосмических компаний.',
   	tags: ['#NASA','#Science']
   },

   {
   	id: '6',
    title: 'Мантия Земли оказалась на 60 градусов горячее, чем считалось',
    summary: 'Насколько сильно раскалена Земля внутри? Недра нашей планеты имеют температуру не менее 1410 градусов Цельсия, находят ученые в новом исследовании.',
    createdAt: new Date('2003-01-25T23:00:00'),
    author: 'Иванов А.В.',
    content: 'В этом новом исследовании группой ученых во главе с Эмили Сарафьян (Emily Sarafian), докторантом факультета геологии и геофизики Массачусетского технологического института, США, показано, что мантия Земли под океанами – слой, простирающийся от коры Земли до её внутреннего жидкого ядра – почти на 60 градусов Цельсия горячее, чем считалось ранее. Эти находки помогут ученым более точно моделировать многие геодинамические процессы, включая тектонику плит, говорят авторы исследования.',
    tags: ['#Space', '#USA']
   },

   {
    id: '18',
    title: 'Снимок: «Хаббл» наблюдает удивительную галактику гибридного типа',
    summary: 'Этот снимок, сделанный при помощи космического телескопа НАСА/ЕКА «Хаббл» (Hubble Space Telescope) демонстрирует необычную галактику UGC 12591.',
    createdAt: new Date('2011-03-21T23:00:00'),
    author: 'Петров А.В.',
    content: 'Этот снимок, сделанный при помощи космического телескопа НАСА/ЕКА «Хаббл» (Hubble Space Telescope) демонстрирует необычную галактику UGC 12591. Галактика UGC 12591 занимает по классификации промежуточное место между линзовидными и спиральными галактиками. Она лежит на расстоянии чуть меньше 400 миллионов световых лет от нас на западном краю галактического сверхскопления Рыб-Персея, длинной цепочки из скоплений галактик, которая протянулась на сотни миллионов световых лет и является одной из самых крупных известных структур Вселенной.',
   	tags: ['#Mars', '#NASA','#Photo']
   },

   {
    id: '13',
    title: 'Ученые проводят испытания гибкого теплового экрана из углеволокна',
    summary: 'Космический аппарат Mars Science Laboratory (MSL), который доставил ровер Curiosity к поверхности Марса, перенес самое жесткое за всю историю освоения Красной планеты вхождение в её атмосферу.',
    createdAt: new Date('2015-02-23T23:00:00'),
    author: 'Сидоров А.В.',
    content: 'Космический аппарат Mars Science Laboratory (MSL), который доставил ровер Curiosity к поверхности Марса, перенес самое жесткое за всю историю освоения Красной планеты вхождение в её атмосферу. Аппарат MSL, по форме напоминающий чайное блюдце, был защищен при помощи теплового экрана, выполненного из материала на основе тонкого, легкого углеродистого волокна, плотность которого чуть больше, чем плотность древесины легкой породы Бальса (0,1-0,3 г/см3).',
   	tags: ['#Earth', '#Photo','#Science','#Earth']
   },

   {
    id: '19',
    title: 'Снимок: Зонд Mars Express наблюдает следы гигантского наводнения на Марсе',
    summary: 'Зонд Европейского космического агентства Mars Express сделал снимок одной из самых крупных сетей каналов оттока на поверхности Красной планеты.',
    createdAt: new Date('2013-11-21T23:00:00'),
    author: 'Трубочкин К.У.',
    content: 'Система каналов долины Касэй простирается примерно на 3000 километров от своего истока, находящегося в каньоне Эхо – лежащем к востоку от неровной вулканической области Тарсис и чуть севернее системы каньонов Долин Маринера, до стока, расположенного на обширных равнинах Хриса.',
   	tags: ['#NASA']
   },

   {
   	id: '8',
    title: 'Новый метод позволит быстрее получать предупреждения о солнечных вспышках',
    summary: 'Наше Солнце, активность которого постоянно меняется, иногда разражается вспышками частиц, движущихся с огромной скоростью.',
    createdAt: new Date('2011-11-11T23:00:00'),
    author: 'Иванов А.В.',
    content: 'Наше Солнце, активность которого постоянно меняется, иногда разражается вспышками частиц, движущихся с огромной скоростью. В новом исследовании ученые из НАСА предложили метод, который позволяет определять признаки формирующейся солнечной вспышки на несколько десятков минут раньше, в сравнении с существующими техниками прогноза этого явления космической погоды –минуты, которые критически важны для защиты астронавтов, находящихся в космосе.',
    tags: ['#Space', '#USA','#Photo','#Earth']
   },

   {
    id: '17',
    title: 'НАСА и фирма-производитель спутников готовят совместную астероидную миссию',
    summary: 'НАСА и компания-производитель спутников, базирующаяся в г. Пало Алто, штат Калифорния, США, объединяют усилия для подготовки миссии к астероиду.',
    createdAt: new Date('2012-06-16T23:00:00'),
    author: 'Петров А.В.',
    content: 'Исследования астероидов стали одной из главных целей НАСА, и фирма Space Systems Loral будет играть ключевую роль в подготовке предстоящей миссии, которая позволит ученым доставить к астероиду исследовательское оборудование для анализа его состава. Эта миссия станет первым проектом компании в области исследований глубокого космоса.',
   	tags: ['#Mars', '#NASA','#Earth']
   },

   {
    id: '5',
    title: 'Стремительные изменения указывают на происхождение извержений на черной дыре',
    summary: 'Резкие газовые выбросы довольно характерны для активных сверхмассивных черных дыр, расположенных в центрах крупных галактик.',
    createdAt: new Date('2016-11-15T23:00:00'),
    author: 'Сидоров А.В.',
    content: 'Резкие газовые выбросы довольно характерны для активных сверхмассивных черных дыр, расположенных в центрах крупных галактик. Эти черные дыры, массы которых достигают миллионов и миллиардов солнечных масс, питаются материей из крупных газопылевых дисков, расположенных вокруг них. Иногда эти черные дыры «проглатывают» слишком много материи и разражаются сверхбыстрыми ветрами, или газовыми выбросами.',
   	tags: ['#Earth', '#Photo', '#History']
   },

   {
    id: '10',
    title: 'Зонд Maven меняет траекторию полета, иначе столкнется со спутником Фобос',
    summary: 'Компанией Рейтер сообщается, по заявлению космического управления США, через несколько дней во избежание удара со спутником Фобос, зонду НАСА Maven придется изменить координаты следования.',
    createdAt: new Date('2014-05-25T23:00:00'),
    author: 'Иванов А.В.',
    content: 'НАСА заявило: Из Пасадены в Калифорнии, лаборатории реактивных двигателей, сотрудниками управления полетом Maven, было дано распоряжение для команды зонда ускорить свое движение на четыре десятых секунды. Это позволит немного скорректировать траекторию полета зонда, что даст возможность предотвратить "встречу" со спутником Марса.',
   	tags: ['#NASA','#Photo','#Earth']
   },
];

var itemm = {
	id: '21',
    title: 'LLGGGGGGG',
    summary: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко.',
    createdAt: new Date('2017-01-26T23:00:00'),
    author: 'Иванов А.В.',
    content: 'Удивительные снимки, сделанные при помощи космического аппарата «Розетта» (Rosetta), демонстрируют присутствие геологических форм, напоминающих дюны, на поверхности кометы Чурюмова-Герасименко. Ученые из лаборатории Laboratoire de Physique et Mécanique des Milieux Hétérogènes (CNRS/ESPCI Paris/UPMC/Université Paris Diderot) проанализировали доступные снимки и произвели моделирование выделения газов с поверхности кометы, чтобы объяснить наблюдаемые явления. Исследователи показали, что большая разница в давлениях газов между освещенной и неосвещенной солнечными лучами сторонами кометы приводит к формированию ветров, способных переносить частицы пыли и формировать дюны.',
   	tags: ['#Photo', '#USSR', '#Mars']
};


var tags = ['#Space', '#SpaceX', '#Mars', '#Earth', '#NASA', '#USSR', '#USA', '#History', '#Science', '#Photo'];

var ourArticles;
function getArticles(skip, top, filterConfig) {
  skip = skip || 0;
  top = top || 10;
   ourArticles = articles;
  if (filterConfig) {
      if (filterConfig.author) {
        if (typeof(filterConfig.author) === 'string') {
        var afterAuthorArticles  = articles.filter(function(item) {
         return (item.author === filterConfig.author);
        });
        ourArticles = afterAuthorArticles;
      }

      if ((filterConfig.fromDate) && (filterConfig.toDate)) {
        var afterDateArticles = ourArticles.filter(function(){
          return ((filterConfig.fromDate <= item.createdAt) && (filterConfig.toDate > item.createdAt)) 
        });
        ourArticles = afterDateArticles;
      }
      else {
        if (filterConfig.fromDate) {
          var afterDateArticles = ourArticles.filter(function(){
            return (filterConfig.fromDate <= item.createdAt) 
          });
          ourArticles = afterDateArticles;
        }
        else {
          if (filterConfig.toDate) {
            var afterDateArticles = ourArticles.filter(function(){
              return (filterConfig.toDate > item.createdAt) 
            });
            ourArticles = afterDateArticles;
          }
        }
      }
    }
  }
  ourArticles.sort(function (a, b) {
      return b.createdAt - a.createdAt;
  });
  var mas = ourArticles.slice(skip, skip + top);
  return mas;
};

function sortArticles (masArticles, filterConfig){
  ourArticles = masArticles;
    if (filterConfig) {
        if (filterConfig.author) {
          if (typeof(filterConfig.author) === 'string') {
          var afterAuthorArticles  = masArticles.filter(function(item) {
           return (item.author === filterConfig.author);
          });
          ourArticles = afterAuthorArticles;
        }

        if ((filterConfig.fromDate) && (filterConfig.toDate)) {
          var afterDateArticles = ourArticles.filter(function(){
            return ((filterConfig.fromDate <= item.createdAt) && (filterConfig.toDate > item.createdAt)) 
          });
          ourArticles = afterDateArticles;
        }
        else {
          if (filterConfig.fromDate) {
            var afterDateArticles = ourArticles.filter(function(){
              return (filterConfig.fromDate <= item.createdAt) 
            });
            ourArticles = afterDateArticles;
          }
          else {
            if (filterConfig.toDate) {
              var afterDateArticles = ourArticles.filter(function(){
                return (filterConfig.toDate > item.createdAt) 
              });
              ourArticles = afterDateArticles;
            }
          }
        }
      }
    ourArticles.sort(function (a, b) {
        return b.createdAt - a.createdAt;
    });
    return ourArticles;
    };
}

function getArticle(id) {
	var myItem;
	articles.forEach(function (item, idElement, articles) {
		if (id == item.id) {
			myItem = item;
		}
	}
	);
	return myItem;
};

function removeArticle(id) {
	articles.forEach(function (item, idElement, articles) {
		if (id == item.id) {
			articles.splice(idElement, 1);
		}
	});
};

function validateArticle(item) {
	if ((typeof(item.id) === 'string') && (typeof(item.title) === 'string') && (item.title.length < 100) && (typeof(item.summary) === 'string') && (item.title.length < 200) && (item.createdAt  !== undefined) && (typeof(item.author) === 'string') && (typeof(item.content) === 'string')  && (item.tags.length >= 1)) {
		return true;
	}
	else {
		return false;
	}
};

function editArticle (id, idItem) {
	var myItem;
	articles.forEach(function (item, idElement, articles) {
	if (id == item.id) {	
		myItem = item;
	}
	});
	if (validateArticle(myItem)) {
		if (typeof(idItem.title) === 'string') {
			myItem.title = idItem.title;		
		}
		if (typeof(idItem.content) === 'string') {
			myItem.content = idItem.content;
		}
		if (typeof(idItem.summary) === 'string') {
			myItem.summary = idItem.summary;
		}
		if (typeof(idItem.tags === Object)) {
			myItem.tags = idItem.tags;
		}
		return true;
	} 
	else {
		return false;
	}
}

function addTags (id, tagsString) {
	var tagsMas = tagsString.split(',');
	var myItem;
	articles.forEach(function (item, idElement, articles) {
		if (id == item.id) {
			myItem = item;
		}
	}
	);
	for (var i = 0; i < tagsMas.length; i++) {
		if (findTags(tagsMas[i])) {
			myItem.tags.push(tagsMas[i]);
		}
	}
}

function val () {
	var aaa = true;
	for (var i = 0; i < articles.length; i++) {
		if (validateArticle(articles[i])) {
			aaa = true;
		}
		else {
			aaa = false;
		}
	}
	return aaa;
}

function findTags (tag) {
	var booll = false;
	for (var i = 0; i < tags.length; i++) {
		if (tags[i] === tag) {
			booll = true;
		}
	}
	return booll;
}

function addArticle(item) {
	if(validateArticle (item)) {
		articles.push(item);
    globalData.masArticles.push(item);
		return true;
	}
	return false;
};


return { 
  getArticles: getArticles,
  itemm: itemm,
  itemmm: itemmm,
  sortArticles: sortArticles,
  removeArticle: removeArticle,
  addArticle: addArticle,
  editArticle: editArticle,
  validateArticle: validateArticle
}
};

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

var htmlControllerModule = function(){
  var ARTICLE_TEMPLATE;
  var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.news-left-part');
        console.log(ARTICLE_TEMPLATE);
        console.log(ARTICLE_LIST_NODE);
    }

    function removeArticlesFromDom () {
        ARTICLE_LIST_NODE.innerHTML = '';
    }

    function renderArticles(articles) {
        removeArticlesFromDom();
        articles.forEach(function (article) {
          addArticle(article);
        });
    }

    function changeUser (nameUser) {
      user = nameUser;
      if (!user) {
        var articlesDelete = document.getElementsByClassName('news-delete');
        var articlesEdit = document.getElementsByClassName('news-edit');
        for (var i = 0; i < articlesDelete.length; i++) {
          articlesDelete[i].style.display = 'none';
          articlesEdit[i].style.display = 'none';
        }
        var articlesAdd = document.getElementsByClassName('news-buttom');
        for (var i = 0; i < articlesAdd.length; i++) {
          articlesAdd[i].style.display = 'none';
        }
        var name = document.getElementById('enter-name1');
        var enter = document.getElementById('enter-enter');
        enter.innerHTML = 'Войти';
        name.style.display = 'none';
      }
      else {
        var articlesDelete = document.getElementsByClassName('news-delete');
        var articlesEdit = document.getElementsByClassName('news-edit');
        for (var i = 0; i < articlesDelete.length; i++) {
          articlesDelete[i].style.display = 'inline';
          articlesEdit[i].style.display = 'inline';
        }
        var articlesAdd = document.getElementsByClassName('news-buttom');
        for (var i = 0; i < articlesAdd.length; i++) {
          articlesAdd[i].style.display = 'inline';
        }
        var name = document.getElementById('enter-name1');
        var enter = document.getElementById('enter-enter');
        name.style.display = 'inline';
        name.innerHTML = nameUser;
        enter.innerHTML = 'Выйти';
      }
    }

    function renderArticle(article) {
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.news-item1').dataset.id = article.id;
        template.content.querySelector('.news-link').textContent = article.title;
        template.content.querySelector('.news-speech').textContent = article.summary;
        template.content.querySelector('.news-author').textContent = article.author;
        template.content.querySelector('p.news-data').textContent = formatDate(article.createdAt);
        template.content.querySelector('.tags').textContent = '';
        article.tags.forEach(function(tag) {
          template.content.querySelector('.tags').textContent +=  ' ' + tag;
        });
        return template.content.querySelector('.news-item1').cloneNode(true);
    }
    function addArticle(article) {
      var html = renderArticle(article);
      ARTICLE_LIST_NODE.appendChild(html);
    }

    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
      init: init,
      renderArticles: renderArticles,
      addArticle: addArticle,
      changeUser: changeUser
    }
}


var htmlController = htmlControllerModule();
htmlController.init();
var articleController = articlesModuleCreater();
var globalData = {
  skip: 0,
  top: 0,
  filterConfig: null,
  masArticles: articleController.articles
};

function displayArcticles(skip, top, filterConfig) {
  var articles = articleController.getArticles(skip, top, filterConfig);
  globalData.skip = skip;
  globalData.top = top;
  globalData.filterConfig = filterConfig;
  globalData.masArticles = articles;
  htmlController.renderArticles(articles);
}

function addArticle(article) {
  articleController.addArticle(article);
  globalData.masArticles = articleController.sortArticles(globalData.masArticles, globalData.filterConfig);
  htmlController.renderArticles(globalData.masArticles);
}

function removeArticle(id) {
  articleController.removeArticle(id);
  globalData.masArticles.forEach(function (item, idElement, articles) {
    if (id == item.id) {
      articles.splice(idElement, 1);
    }
  });
  htmlController.renderArticles(globalData.masArticles);
}
function editArticle(id, article) {
  articleController.editArticle(id, article);
  var myItem;
  globalData.masArticles.forEach(function (item, idElement, articles) {
  if (id == item.id) {  
    myItem = item;
  }
  });
  if (articleController.validateArticle(myItem)) {
    if (typeof(article.title) === 'string') {
      myItem.title = article.title;    
    }
    if (typeof(article.content) === 'string') {
      myItem.content = article.content;
    }
    if (typeof(article.summary) === 'string') {
      myItem.summary = article.summary;
    }
    if (typeof(article.tags === Object)) {
      myItem.tags = article.tags;
    }
  } 
  htmlController.renderArticles(globalData.masArticles);
}

function changeUser (nameUser) {
  htmlController.changeUser(nameUser);
}













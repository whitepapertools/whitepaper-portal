let storedText, html;

// id - имя MD файла латиницей (т.к. имя уникально)
const mdData = [
  { 
    itemName:'pt-surface',
    section: true,
    id: 'pt-surface',
    url:'https://raw.githubusercontent.com/whitepapertools/whitepaper-bem/master/pt-surface/pt-surface.md'
  },
  { 
    itemName:'pt-card',
    section: false,
    id: 'pt-card',
    url:'https://raw.githubusercontent.com/whitepapertools/whitepaper-portal/master/docs/pt-card.md'
  },
  { 
    itemName:'pt-list',
    section: false,
    id: 'pt-list',
    url:'https://raw.githubusercontent.com/whitepapertools/whitepaper-portal/master/docs/pt-list.md'
  }
];

// рисуем боковое меню из объекта
let items = document.createDocumentFragment();
for (let i = 0; i <= mdData.length-1; i++) {
  let sideBarItem = document.createElement('div');
  sideBarItem.classList.add('text', 'decorator', 'decorator_indent-b_xl');
  sideBarItem.textContent = mdData[i].itemName;
  sideBarItem.addEventListener('click', function (event) {
    parseMd(mdData[i].url);
  });
  if (mdData[i].section != true) {
    sideBarItem.classList.add('decorator_indent-l_l');
  }
  items.appendChild(sideBarItem);
}

document.getElementById('sidebar').appendChild(items);


// function done(x) {
//     document.getElementById('app').innerHTML = '';
//     document.getElementById('app').innerHTML += x;
// }

// парсит МД по ссылке и заворачивает хтмл в реакт
function parseMd(link) {
  fetch(link)
  .then(function(response) {
    response.text().then(function(text) {
      var converter = new showdown.Converter();
      converter.setFlavor('github');
      converter.setOption('omitExtraWLInCodeBlocks', 'true');
      converter.setOption('backslashEscapesHTMLTags', 'true');
      storedText = text;
      var html = converter.makeHtml(storedText);
      // let x = window.HTMLReactParser(html);
      // console.log(x);
      // let h1 = React.createElement('div', null, html);
      ReactDOM.render(window.HTMLReactParser(html), document.getElementById('app'));

      // console.log(html);
      // done(html);
    })
  .catch(function(error) {
      console.log('err');
    })
  });
}
// let url = 'https://raw.githubusercontent.com/whitepapertools/whitepaper-bem/master/pt-surface/pt-surface.md';
let url = 'https://raw.githubusercontent.com/whitepapertools/whitepaper-portal/master/docs/pt-card.md';
let storedText, html;

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      console.log(storedText);
      var converter = new showdown.Converter();
      console.log(converter);
      var html = converter.makeHtml(storedText);
      console.log(html);
      done(html);
    })
  .catch(function(error) {
      console.log('err');
    })
  });

function done(x) {
//   document.getElementById('app').textContent =
//     "Here's what I got! \n" + storedText;
    document.getElementById('app').innerHTML += x;
}

// console.log(storedText)

// var converter = new showdown.Converter(),
//     text      = '# hello, markdown!',
//     html      = converter.makeHtml(text);

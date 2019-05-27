// let url = 'https://raw.githubusercontent.com/whitepapertools/whitepaper-bem/master/pt-surface/pt-surface.md';
// let url = 'https://raw.githubusercontent.com/whitepapertools/whitepaper-portal/master/docs/pt-card.md';
let url = 'https://raw.githubusercontent.com/whitepapertools/whitepaper-portal/master/docs/pt-list.md';


let storedText, html;
// var defaultOptions = showdown.getOption('omitExtraWLInCodeBlocks: true');
showdown.setFlavor('github');
// showdown.setFlavor('vanilla');
// showdown.setFlavor('original');
// var defaultOptions = showdown.getOption.omitExtraWLInCodeBlocks('true');
// console.log(defaultOptions)

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      // console.log(storedText);
      var converter = new showdown.Converter();
      converter.setOption('omitExtraWLInCodeBlocks', 'true');
      // console.log(converter);
      var html = converter.makeHtml(storedText);
      // console.log(html);
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

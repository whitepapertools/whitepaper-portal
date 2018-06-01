# Цвета

Все переменные для цветов называются по смыслу, месту их использования. Они не обозначают значение цвета. 

Цвета делятся на несколько частей: 
+ **Базовые цвета.** От них наследуются все остальные. Использовать их в других случаях не рекомендуется. С префиксом --color-base-
+ **Статусные цвета.** 4 цвета для статусов. Они не наследуются от основной палитры, но влияют на цвета статусные текста и фонов блоков. С префиксом --color-base-
+ **Цвета фонов**. С префиксом --color-bg-
+ **Цвета текста**. С префиксом --color-typo-
+ **Цвета ссылок**. С префиксом --color-link

<iframe height='300' scrolling='no' title='theme. color' src='//codepen.io/whitepapertools/embed/289dd885a6773907fdff0546ce3a820a/?height=300&theme-id=0&default-tab=css,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/289dd885a6773907fdff0546ce3a820a/'>theme. color</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Чтобы применить цвет к своему локальном ублоку, используй [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

```css
background: var(--color-bg-brand);
```

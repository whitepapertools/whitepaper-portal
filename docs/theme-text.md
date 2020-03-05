# Типографика

Переменные размеров используются в текстовых блоках и подчёркивают информационную иерархию.

Задает размеры и высоты строк для контентного блока [text](content-text.md).
Эти переменные могут использоваться в локальных стилях, но только когда нет возможности использовать блок [text](content-text.md).

```css
.theme_size_default {
    /* Размер текста */
    --size-text-base: 16px;

    --size-text-xs: 0.7em;
    --size-text-s: 0.8em;
    --size-text-m: 1em;
    --size-text-l: 1.125em;
    --size-text-xl: 1.25em;
    --size-text-2xl: 1.5em;
    --size-text-3xl: 2em;
    --size-text-4xl: 3em;
    --size-text-5xl: 4.5em;
    --size-text-6xl: 6em;

    /* Межстрочный интервал */
    --line-height-text-xs: 1.2em;
    --line-height-text-s: 1.4em;
    --line-height-text-m: 1.5em;
    --line-height-text-l: 1.6em;


    /* Размер текста DEPRECATED */
    --size-typo-xs: 11px;
    --size-typo-s: 13px;
    --size-typo-m: 15px;
    --size-typo-l: 18px;
    --size-typo-xl: 20px;
    --size-typo-2xl: 24px;
    --size-typo-3xl: 32px;
    --size-typo-4xl: 48px;
    --size-typo-5xl: 72px;
    --size-typo-6xl: 96px;

    /* Межстрочный интервал DEPRECATED */
    --line-height-typo-xs: 15px;
    --line-height-typo-s: 18px;
    --line-height-typo-m: 21px;
    --line-height-typo-l: 25px;
    --line-height-typo-xl: 28px;
    --line-height-typo-2xl: 34px;
    --line-height-typo-3xl: 42px;
    --line-height-typo-4xl: 62px;
    --line-height-typo-5xl: 82px;
    --line-height-typo-6xl: 115px;
}
```

Стили модификаторов на блоке текст можно посмотреть [здесь](http://whitepaper.tools/doc.html#/content-text).

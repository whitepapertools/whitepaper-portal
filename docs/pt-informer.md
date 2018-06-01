# pt-informer

Информационный блок, имеющий статус. Вставляется, как в контент, так и на отдельный интерфейсный слой.

<iframe height='500' scrolling='no' title='pt-informer. simple' src='//codepen.io/whitepapertools/embed/7745643cd2d4e611c2bdf5210f410b90/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/7745643cd2d4e611c2bdf5210f410b90/'>pt-informer. simple</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификаторы | Значение                                              | Описание
------------ | ----------------------------------------------------- | ----------------
border       | all                                                   | Обводка
view         | normal / success / warning / alert / system / default | Статус информера

## Элемент content

Информер может быть любого размера. Когда он занимает большую площадь, конент можно разбить на столбцы, чтобы было легче читать.

<iframe height='500' scrolling='no' title='pt-informer. multycolumns' src='//codepen.io/whitepapertools/embed/d84911f6774b80e6bde02217e4d7242f/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/d84911f6774b80e6bde02217e4d7242f/'>pt-informer. multycolumns</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификаторы элемента `content`     | Значение                   | Описание
----------------------------------- | -------------------------- | -------------------------------------
distribute                          | default / between / center | Распределение контента по горизонтали
space-a                             | s / m / l / xl / xxl       | Внутренние отступы по всем сторонам
space-h                             | s / m / l / xl / xxl       | Внутренние отступы по горизонтали
space-v                             | s / m / l / xl / xxl       | Внутренние отступы по вертикали

## Элемент action

Располагается в конце информера для кнопок и других контролов.

Модификаторы элемента `action`     | Значение              | Описание
---------------------------------- | --------------------- | ---------------------------------------
align                              | center / right        | Выравнивание по горизонтали и вертикали
space-a                            | s / m / l / xl / xxl  | Внутренние отступы по всем сторонам
space-h                            | s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                            | s / m / l / xl / xxl  | Внутренние отступы по вертикали
space-b                            | s / m / l / xl / xxl  | Внутренний отступ снизу

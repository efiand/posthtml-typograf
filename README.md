# posthtml-typograf [![npm version](https://img.shields.io/npm/v/posthtml-typograf.svg)](https://www.npmjs.com/package/posthtml-typograf)

PostHTML-плагин для [typograf](https://www.npmjs.com/package/typograf).

## Установка

`npm i -E posthtml-typograf`

## Использование в произвольном коде

```js
const { typografy } = require("posthtml-typograf");

// Где-то внутри middleware, получившей HTML-код:
const newHTML = typografy(oldHTML, ["ru/other/phone-number"]);
```

`typografy` принимает три аргумента (обязателен только первый из них):

1. Обрабатываемый HTML-код.

2. Отключаемые [правила](https://github.com/typograf/typograf/blob/HEAD/docs/RULES.ru.md) - массив (по умолчанию пустой).

3. Опции типографа - объект (по умолчанию пустой), свойствами которого можно переопределить следующие предустановки плагиина:

   ```json
   {
     "locale": ["ru", "en-US"],
     "htmlEntity": { "type": "name" }
   }
   ```

## Использование в posthtml.config.js

```js
const { getPosthtmlTypograf } = require("posthtml-typograf");

module.exports = () => ({
  plugins: [
    // other PostHTML plugins
    getPosthtmlTypograf(["ru/other/phone-number"]),
  ],
});
```

`getPosthtmlTypograf` принимает два аргумента:

1. Отключаемые [правила](https://github.com/typograf/typograf/blob/HEAD/docs/RULES.ru.md) - массив (по умолчанию пустой).

2. Опции типографа - объект (по умолчанию пустой), свойствами которого можно переопределить предустановки плагиина.

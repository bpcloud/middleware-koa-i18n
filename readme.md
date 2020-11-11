# koa i18n middleware in bpframework.

### Middleware specification

https://github.com/bpcloud/middleware

### usage


Setup.

```js
import { Application } from 'bpframework';

let cfg = {
  dirs: ['resource/locales'],
  defaultLocale: 'zh-CN',
  functionName: '__i18n',
  queryField: 'locale', // querystring - `/?locale=en-US`
  cookieField: 'locale',
  localeAlias: {
    zh: 'zh-CN',
  },
};

Application.use(require('@bpframework/middleware-koa-i18n')(cfg))
Application.runKoa(...);
```

Use in anywhere.

```js
__i18n('hello {name}', {name:'world'})  // return 'hello world' by default locale
__i18n('hello %s %s', 'name', 'world')  // return 'hello name world' by default locale
__i18nLang('en', 'hello {name}', {name:'world'})  // return 'hello world' by 'en' locale
```

Use in controller.

```js
@RequestMapping({
  path: '/test',
  method: RequestMethod.GET,
})
async test(
  @RestObject restObj: RestObjectTypeRest<koa.Context> // or RestObjectType
): Promise<any> {

  // return 'hello world' by locale
  restObj.ctx.__i18n('hello {name}', {name:'world'});

  ...
}
```
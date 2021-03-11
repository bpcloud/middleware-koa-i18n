/// <reference types="node" />

import './koa.d';

declare global {
  /**
  * @desc: (使用默认语言) i18n本地化. 返回本地化字符串.
  * @example
  *   __i18n('hello {name}', {name:'world'})
  *   __i18n('hello %s %s', 'name', 'world')
  */
  function __i18n(phrase: string, ...params: any[]): string;

  /**
  * @desc: (使用指定语言) i18n本地化. 返回本地化字符串.
  * @example
  *   __i18nLang('en', 'hello {name}', {name:'world'})
  *   __i18nLang('en', 'hello %s %s', 'name', 'world')
  */
  function __i18nLang(lang:string, phrase:string, ...params: any[]):string;
}

interface Cfg {
  dirs?: string[],
  defaultLocale?: string,
  functionName?: '__i18n' | string,
  queryField?: 'locale' | string, // querystring - `/?locale=en-US`
  cookieField?: 'locale' | string,
  localeAlias?: {
    zh: 'zh-CN',
  } | object,
}

interface BpframeworkMiddleware {
  type: string,
  afterRoute: (app:any)=>Promise<boolean>,
  beforeRoute: (app:any)=>Promise<boolean>,
  initiator: (app:any)=>void,
}

export const name: string;

export function middleware(cfg?: Cfg): BpframeworkMiddleware;
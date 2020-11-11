
/**
 * Copyright (c) 2017 Copyright tj All Rights Reserved.
 * Author: lipengxiang
 * Date: 2017-06-12
 * Desc: 全局
 */


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


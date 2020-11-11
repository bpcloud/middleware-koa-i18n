'use strict';

/**
* Copyright (c) 2021 Copyright bp All Rights Reserved.
* Author: brian.li
* Date: 2021-03-11 13:13
* Desc: 
*/


module.exports = function (app, cfg) {
  require('koa-locales')(app, {
    dirs: ['resource/locales'],
    defaultLocale: DefaultLocale,
    functionName: '__i18n',
    queryField: 'locale', // querystring - `/?locale=en-US`
    cookieField: 'locale',
    localeAlias: {
      zh: 'zh-CN',
    },
  });

  (global).__i18n = (phrase, ...params) => {
    return (app).__i18n(DefaultLocale, phrase, ...params);
  }

  (global).__i18nLang = (lang, phrase, ...params) => {
    return (app).__i18n(lang, phrase, ...params);
  }
}
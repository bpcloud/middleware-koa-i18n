'use strict';

/**
* Copyright (c) 2021 Copyright bp All Rights Reserved.
* Author: brian.li
* Date: 2021-03-11 13:13
* Desc: 
*/

var defaultCfg = require('./defaultCfg');

module.exports = function (app, cfg) {
  require('koa-locales')(app, cfg);

  (global).__i18n = (phrase, ...params) => {
    return (app).__i18n(defaultCfg.DefaultLocale, phrase, ...params);
  }

  (global).__i18nLang = (lang, phrase, ...params) => {
    return (app).__i18n(lang, phrase, ...params);
  }
}
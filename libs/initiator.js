'use strict';

/**
* Copyright (c) 2021 Copyright bp All Rights Reserved.
* Author: brian.li
* Date: 2021-03-11 13:13
* Desc: 
*/

var defaultCfg = require('./defaultCfg');

function formatLocale(locale) {
  // support zh_CN, en_US => zh-CN, en-US
  return locale.replace('_', '-').toLowerCase();
}

module.exports = function (app, cfg, bpApp) {

  bpApp.getLogger().info("  use i18n dir: " + JSON.stringify(cfg.dirs));

  require('koa-locales')(app, cfg);

  (global).__i18n = (phrase, ...params) => {
    return app.__i18n(formatLocale(defaultCfg.defaultCfg.defaultLocale), phrase, ...params);
  }

  (global).__i18nLang = (lang, phrase, ...params) => {
    return app.__i18n(formatLocale(lang), phrase, ...params);
  }
}
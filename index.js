'use strict';

/**
* Copyright (c) 2021 Copyright bp All Rights Reserved.
* Author: brian.li
* Date: 2021-03-11 13:53
* Desc: 
*/

var afterRoute = require('./libs/afterRoute');
var beforeRoute = require('./libs/beforeRoute');
var initiator = require('./libs/initiator');

const DefaultLocale = 'zh-CN';

module.export = function (cfg) {

  cfg = cfg || {};

  cfg.dirs = cfg.dirs || ['resource/locales'];
  cfg.defaultLocale = cfg.defaultLocale || DefaultLocale;
  cfg.functionName = cfg.functionName || '__i18n';
  cfg.queryField = cfg.queryField || 'locale'; // querystring - `/?locale=en-US`
  cfg.cookieField = cfg.cookieField || 'locale';
  cfg.localeAlias = cfg.localeAlias || {zh: 'zh-CN'};

  return {
    type: 'koa',
    afterRoute,
    beforeRoute,
    initiator: (app) => {
      return initiator(app, cfg);
    }
  };
}
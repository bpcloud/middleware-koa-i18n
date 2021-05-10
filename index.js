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
var defaultCfg = require('./libs/defaultCfg');
var path = require('path');

exports.name = "middleware-koa-i18n";

exports.middleware = function (cfg) {

  cfg = cfg || {};

  cfg.dirs = cfg.dirs || defaultCfg.defaultCfg.dirs;
  cfg.defaultLocale = cfg.defaultLocale || defaultCfg.defaultCfg.defaultLocale;
  cfg.functionName = defaultCfg.defaultCfg.functionName;
  cfg.queryField = cfg.queryField || defaultCfg.defaultCfg.queryField; // querystring - `/?locale=en-US`
  cfg.cookieField = cfg.cookieField || defaultCfg.defaultCfg.cookieField;
  cfg.localeAlias = cfg.localeAlias || defaultCfg.defaultCfg.localeAlias;

  var cwd = process.cwd();
  if (cwd[cwd.length - 1] != path.sep) {
    cwd += path.sep;
  }

  for (var i = 0; i < cfg.dirs.length; i++) {
    if (cfg.dirs[i].indexOf(process.cwd()) < 0) {
      if (cfg.dirs[i][0] != path.sep) {
        cfg.dirs[i] = cwd + cfg.dirs[i];
      } else {
        cfg.dirs[i] = cwd + cfg.dirs[i].substr(1);
      }
    }
  }

  return {
    type: 'koa',
    name: exports.name,
    afterRoute,
    beforeRoute,
    initiator: (app, bpApp) => {
      return initiator(app, cfg, bpApp);
    }
  };
}
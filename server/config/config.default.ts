import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611542593852_7709';

  // add your egg config in here
  config.middleware = [ 'errorHandler' ];

  const mongoose = {
    client: {
      url: 'mongodb://139.186.134.86:27017/fastweb',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };

  const view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  const passportGithub = {
    key: '89474265692bc900eedc',
    secret: '24ee44d8e148cba9905fd7a95d766a35b8a181e9',
    proxy: true,
    callbackURL: 'http://localhost:7001/passport/github/callback',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    passportGithub,
    mongoose,
    view,
  };
};

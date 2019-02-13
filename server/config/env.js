const config = (env = 'production') => {
  const bypassroutes = [{
    method: 'post',
    url: /^\/auth\/login$/,
  }, {
    method: 'post',
    url: /^\/auth\/signup$/,
  }];

  const development = {
    serverHost: '127.0.0.1',
    serverPort: 4000,
    dbUrl: 'mongodb://localhost:27017/testDb',
    logLevel: 'debug',
    jwtSecret: 'thisIsJwtSecret',
    bypassroutes,
  };
  const production = {
    serverHost: '',
    serverPort: 4001,
    dbUrl: 'mongodb://localhost:27017/productionDb',
    logLevel: 'warn',
    bypassroutes,
  }

  return env === 'development' ? development : production;
}

export default config;
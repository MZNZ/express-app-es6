const config = {
  development: {
    serverHost: '127.0.0.1',
    serverPort: 4000,
    dbUrl: 'mongodb://localhost:27017/testDb',
    logLevel: 'debug',
  },
  production: {
    serverHost: '',
    serverPort: 4001,
    dbUrl: 'mongodb://localhost:27017/productionDb',
    logLevel: 'warn',
  }
}

export default config;
const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'The Training Ground East London API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/karlbalagtey/ttgel-api',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;

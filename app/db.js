const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const database = new Sequelize('u423375005_krosa', 'u423375005_krosa', 'cG~9j~f&@Io', {
  host: 'sql689.main-hosting.eu',
  dialect: 'mysql'
});

module.exports = database
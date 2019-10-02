const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('project_sequelize', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
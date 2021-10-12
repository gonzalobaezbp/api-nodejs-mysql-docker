const dotenv = require('dotenv').config();

module.exports = {
  host: process.env.host || 'localhost',
  port: process.env.port || '3306',
  user: process.env.user || 'root',
  password: process.env.password || 'root',
  database: process.env.database || 'DB_TEST'
}

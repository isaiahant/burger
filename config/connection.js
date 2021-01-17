const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:Holytoledo16@localhost/ylk0s9x31j3ms9w5')

module.exports = connection

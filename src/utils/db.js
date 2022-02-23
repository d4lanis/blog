const mysql = require('mysql');

/*const conn = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});*/

const conn = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'homestead',
    password: 'secret',
    database: 'blog',
});

conn.connect(function(err){
    if(err) throw err;
    console.log('Database connected');
});

module.exports = conn;
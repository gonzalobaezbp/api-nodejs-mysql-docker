const express = require('express');
const mysql = require('mysql');
const dbCon = require('express-myconnection');
const routes = require('./routes');

const dbOpt = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DBNM
};

const app = express();

app.set('port', 3000);

app.use(dbCon(mysql, dbOpt, 'single'));
app.use(express.json());

app.listen(process.env.PORT || app.get('port'), () => {
    console.log('Server running on port: ', app.get('port'));
});

app.use('/api', routes);

// =================================

// const express = require('express');
// const mysql = require('mysql');
// const dbCon = require('express-myconnection');
// const routes = require('./routes');
// const dbOpt = {
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'root',
//     database: 'DB_TEST'
// };

// const app = express();

// app.set('port', 3000);

// app.use(dbCon(mysql, dbOpt, 'single'));
// app.use(express.json());

// app.listen(process.env.PORT || app.get('port'), () => {
//     console.log('Server running on port: ', app.get('port'));
// });

// app.use('/api', routes);
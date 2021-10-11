const express = require('express');
const mysql = require('mysql');
const dbCon = require('express-myconnection');
const routes = require('./routes');
const dbOpt = {
    host: 'wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'ucw1sed9qstpb6f0',
    password: 'b8qcbs2hdlj675za',
    database: 'm6kishbv9ddh2vjy'
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
const express = require('express');
const mysql = require('mysql');
const dbCon = require('express-myconnection');
const routes = require('./routes');
// const config = require('./config');
// const dotenv = require('dotenv').config();
const app = express();


const dbOpt = {
    host: 'wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'ucw1sed9qstpb6f0',
    password: 'b8qcbs2hdlj675za',
    database: 'm6kishbv9ddh2vjy'
};

app.set('port', 3000);

console.log( dbOpt );

app.use(dbCon(mysql, dbOpt, 'single'));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Server running on port: ', app.get('port'));
});

app.use('/api', routes);
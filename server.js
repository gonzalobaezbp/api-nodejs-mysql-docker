const express = require('express');
const mysql = require('mysql');
const dbCon = require('express-myconnection');
const routes = require('./routes');
const config = require('./config');
const app = express();

const dbOpt = { ...config }

app.set('port', 3000);

app.use(dbCon(mysql, dbOpt, 'single'));
app.use(express.json());

app.listen(process.env.PORT || app.get('port'), () => {
    console.log('Server running on port: ', app.get('port'));
});

app.use('/api', routes);
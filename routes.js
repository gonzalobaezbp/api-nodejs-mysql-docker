const express = require('express');
const routes = express.Router();



routes.get('/', (req, res) => {
    req.getConnection((err, connection) => {
        if(err) return res.send(err);
        connection.query('SELECT * FROM USER', (err, rows) => {
            if(err) return res.send(err);
            res.json(rows);
        }); 
    });
});

routes.get('/:id', (req, res) => {
    req.getConnection((err, connection) => {
        if(err) return res.send(err);
        connection.query('SELECT * FROM USER WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err);
            res.json(rows);
        }); 
    });
});


routes.post('/', (req, res) => {
    req.getConnection((err, connection) => {
        if(err) return res.send(err);
        // console.log(req.body);
        connection.query('INSERT INTO USER SET ?', [req.body], (err, rows) => {
            if(err) return res.send(err);
            res.send('User added successfully');
        }); 
    });
});

routes.delete('/:id', (req, res) => {
    req.getConnection((err, connection) => {
        if(err) return res.send(err);
        // console.log(req.body);
        connection.query('DELETE FROM USER WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err);
            res.send('User deleted successfully');
        }); 
    });
});

routes.put('/:id', (req, res) => {
    req.getConnection((err, connection) => {
        if(err) return res.send(err);
        // console.log(req.body.AGE);
        connection.query('UPDATE USER SET USER.access_level = ? WHERE id = ?', [req.body.access_level, req.params.id], (err, rows) => {
            if(err) return res.send(err);
            res.send('Access level number updated successfully');
        }); 
    });
});

module.exports = routes;
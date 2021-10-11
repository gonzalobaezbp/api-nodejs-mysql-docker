const express = require('express')

const app = express()

app.set('port', 3000)

app.use(express.json())

app.get('/welcome', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(app.get('port'), () => {
    console.log('Server running on port: ', app.get('port'));
})
const express = require('express');
const app = express();

app.post('/', (req, res) => { 
    res.send('Hello form POST /');
});

app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query.name + ' ' + req.query.age)
})

app.listen(3000, () => console.log('Server running on port 3000'))
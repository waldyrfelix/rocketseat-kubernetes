const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('short'))

app.get('/', (req, res) => {
    res.json({
        "date": new Date(),
        "message": "Olá galera Rocket Seat!",
        "headers": req.headers
    })
});

app.listen(9000, () => {
    console.log('Example app listening on port 9000!');
})


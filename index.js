const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.use('/static', express.static('publics'))
app.use('/in', express.static(path.join(__dirname, 'web-server/html/public')))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/book', function (req, res) {
    console.log(req.body)
    const movieName = req.body.movieName
    const seats = req.body.seats
    // console.log(movieName)
    // console.log(seats)
    let prices = null
    const movies = [
        {
            name: "ter",
            prices: 90
        },
        {
            name: "ant",
            prices: 190
        }
    ]
    movies.forEach(function (value, index, array) {
        // console.log(value.name)
        if (movieName === value.name) {
            prices = value.prices
        }
    })
    const finalPrices = prices * seats
    res.status(200).json({
        isSuccess: true,
        finalPrices: finalPrices
    })
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
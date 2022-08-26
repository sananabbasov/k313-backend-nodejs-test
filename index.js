const express = require('express')
const cors = require('cors')
const movies = require('./data/movies.json')
const series = require('./data/series.json')
const categories =  require('./data/categories.json')
const e = require('express')
const app = express()
app.use(cors())


app.get('/movies', function (req, res) {
    res.send(movies)
})
app.get('/series', function (req, res) {
    if (req.query.id == undefined) {
        res.send(series)
    }else{
        res.send(series.find(x=>x.id == req.query.id))
    }
})

app.get('/categories', function (req, res) {
    res.send(categories)
})


app.listen(5000)
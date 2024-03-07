const { weatherData } = require('../utils/weatherData')
const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))



app.get('/', (req, res) => {
    res.render('index', { title: 'Weather App' })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) res.json({ message: "address is requied" })
    weatherData(req.query.address, (err, data) => {
        if (err) res.json(err)
        res.json(data)
    })
})




app.all('*', (req, res) => {
    res.status(404).send('<h1>Route  not found</h1>')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port 3000')
})
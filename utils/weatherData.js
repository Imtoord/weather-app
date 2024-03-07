const request = require('request')

const weatherData = (address, cb) => {
    const url = process.env.WEATHER_URL  + address + '&APPID=' + process.env.WEATHER_API_KEY
    console.log(url);
    request({ url, json: true }, (err, data) => {
        if(err){
            cb('Unable to connect to weather service! '+err, undefined)
        }else{
            cb(undefined, data?.body)
        }
    })
}

module.exports = { weatherData }
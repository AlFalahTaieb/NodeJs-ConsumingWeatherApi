const request = require('request');

var getWeather=(lat,lng,callback)=>{



request({
    url:  `https://api.darksky.net/forecast/SecretKey/${lat},${lng}`,
    json: true
},(error, response, body )=> {
//noinspection JSUnresolvedVariable

    if(!error && response.statusCode===200){
        callback(body.currently.temperature);
        callback(undefined,{
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    }else {
        callback('Unable to fetch weather / Impossible de récupérer la météo');
    }
});

};
module.exports.getWeather=getWeather;

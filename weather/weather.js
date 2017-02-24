const request = require('request');

var getWeather=(lat,lng,callback)=>{



request({
    url:  `https://api.darksky.net/forecast/3def28f885984a61ebfd500eb8f8b459/${lat},${lng}`,
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
        callback('Unable to feth weather');
    }
});

};
module.exports.getWeather=getWeather;
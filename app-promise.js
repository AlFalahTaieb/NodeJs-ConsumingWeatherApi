const yargs=require('yargs');
const axios=require('axios');
const argv=yargs
    .options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch weather for',
        string:true
    }
})
    .help ()// help flag béch nifhém béha
    .alias('help','h')//
    .argv; // tékhou les configurations eli mawjoudin el fou9 !

var encodedAddress= encodeURIComponent(argv.address);
var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios.get(geocodeUrl).then((response)=> {

    if(response.data.status=='ZERO_RESULTS'){
        throw new Error('Unable find that address.')
    }

    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    var weatherUrl=`https://api.darksky.net/forecast/3def28f885984a61ebfd500eb8f8b459/${lat},${lng}`;


    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature=response.data.currently.apparentTemperature;

console.log(`La température actuelle est  ${temperature}. La température ressentie ${apparentTemperature}`);
}).catch((e)=>{
    if (e.code==='ENOTFOUND'){
        console.log('Unable to conect to the API Servers.')
    }else{
        console.log(e.message);
    }
});

var yargs = require('yargs');
var geocode=require('./geocode/geocode');
var weather=require('./weather/weather');

//argv tékhou el input wo tparséha el yargs
const argv = yargs
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

//si on a une erreur pas de résultats wo le contraire kifkif
geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
   if (errorMessage){
       console.log(errorMessage);

   } else{
    console.log(results.address)
       weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults) =>{

           if(errorMessage){
               console.log(errorMessage);
           }else {
               console.log(`La température actuelle est  ${weatherResults.temperature}. La température ressentie ${weatherResults.apparentTemperature}`);
           }
       });
   }
}); // lehya bel loutani el kol
// béch tekhou el Data mel geocode wo thoutha fel getwather béch tkharjlna el résultat
//3def28f885984a61ebfd500eb8f8b459 forecost.io

//lat,lng,callback




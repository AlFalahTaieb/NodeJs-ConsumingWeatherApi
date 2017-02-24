
var yargs = require('yargs');
var geocode=require('./geocode/geocode')


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
       console.log(JSON.stringify(results,undefined,2));
   }
}); // lehya bel loutani el kol
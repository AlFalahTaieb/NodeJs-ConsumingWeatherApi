var request=require('request');

var geocodeAddress = (address,callback)=>{


// console.log(argv)
//Yargs parsing arguments and generating an elegant user interface.
//EncodeURIcomponent hédhi béch tkhalini nékhou les valeurs wo houma encodé bel %
//DecodeURICOmponent elle fait le contraire emta3 eli fou9ha
    var encodedAddress= encodeURIComponent(address);

    request({
//naamlou request el google API wo howa iraj3elna Json
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
        //json true ambriqué , json false kémla ijibhélék
    },(error,response,body)=>{

        if(error) {
            callback('CThere is an Error check the Address please ! ')

        }
        else if (body.status==='ZERO_RESULTS'){
           callback('Check the address maybe there is an error');
        }
        else if (body.status==='OK') {
            callback(undefined,{
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
            // console.log(body);
            //console.log(JSON.stringify(body,undefined,2));
            // console.log(`Address: ${body.results[0].formatted_address} `);
            // console.log(`Latidue: ${body.results[0].geometry.location.lat}`);
            // console.log(`langitude: ${body.results[0].geometry.location.lng}`);
        }
    });

};
module.exports.geocodeAddress=geocodeAddress;

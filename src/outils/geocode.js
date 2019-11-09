const request=require('request')
const geocode = (adresse,callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+adresse+'.json?access_token=pk.eyJ1IjoibWVuc2k5OCIsImEiOiJjazJuZGdxNHMwcDZnM21vZm1qOG1rdzB4In0.A4CkqX8NtkqW9l5gTGX00Q'
    request({url, json:true },(error1,response1)=>{
        

        if(error1){callback('ERROR CONNECTION',undefined)}
    else if (response1.body.features.length===0){callback('ERROR SERVICES',undefined)}
    else{    data1={
        longitude:response1.body.features[0].center[0],
        latitude:response1.body.features[0].center[1],
        place:response1.body.features[0].place_name
       
                    }
    callback(undefined,data1)

}
    })
}
module.exports=geocode
const request=require('request')

const forecast=(l,a,callback)=>{
    const url='https://api.darksky.net/forecast/9f9af61f46add2124a8d20e5f1d06e76/'+l+','+a
request({ url, json:true}, (error,response)=>{
    
    if (error){callback('ERROR CONNECTION',undefined)}
    else if (response.body.error){callback(data.error,undefined)}
    else {
        const data1={
            temperature:response.body.currently.temperature,
            probabilite:response.body.currently.precipProbability,
            summary:response.body.hourly.summary

        }
        callback(undefined,data1)
    }
})
  
  
 
}
module.exports=forecast
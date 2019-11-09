const path=require('path')
const geocode=require('./outils/geocode')
const forecast=require('./outils/forecast')

const express=require('express')
 const app=express()
 const hbs=require('hbs')
//paths
const direc=path.join(__dirname,'../public')
const partialpath=path.join(__dirname,'/partials')
//handlebars
app.set('view engine','hbs')
hbs.registerPartials(partialpath)
//static directory to serve
app.use(express.static(direc))


//rendering
app.get('',(req,res)=>{
    res.render('index', {
        title:'Weather App',
        name:'Ghaith'
    })
})
 app.get('/about',(req,res)=>{
     res.render('about')
 })
 
 
 app.get('/help',(req,res)=>{
    res.render('help')
})
 
 app.get('/weather',(req,res)=>{
     if(!req.query.adresse)
     {
         return res.send({error:'you should provide an adress'})
     }
     geocode(req.query.adresse, (error1,{longitude,latitude,place}={})  =>
     {
         if (error1){return res.send(error1)}
 
        
         forecast(latitude,longitude,(error,data)=>{
             if(error){return res.send(error)}
             
             res.send({summary:data.summary,
            temparature:data.temperature,
            proba:data.probabilite,
        place:place })  
     
         })
     })

})
//error exp '*'/help
app.get('*',(req,res)=>{
    res.render('error')
})


 app.listen(5000,()=>{
     console.log('Server Up on 5000')
 })
express=require('express')
const app=express();
const routerProduct=require('./routes/product')
const bodyparser=require('body-parser') 


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); 

     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(bodyparser.json() )
  
app.use('/product',routerProduct)

app.get('/',(request,response)=>
{
    response.send("welcome to backend 00")
})
app.listen(9898,()=>
{
    console.log("server started at post 9898");
    
})
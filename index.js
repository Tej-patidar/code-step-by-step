const express = require('express');
const app = express();
 

app.get('/',(req,res)=>{
     console.log("these is the data given by the Browser >>>>", req.query.name)
     res.send("<h1>Hello These is the Home Page </h1>")
})

app.get('/about',(req,res)=>{
     res.send(`
     <input type=text  placeholder="Type Name" value=" ${req.query.name}"/>
     `)
})


app.get('/help',(req,res)=>{
     res.send("These is a help Homepage")
})



app.listen(4000);
const express = require('express');
const app = express();
 

app.get('/',(req,res)=>{
     res.send("These is a Homepage")
})

app.get('/about',(req,res)=>{
     res.send("These is a About Homepage")
})


app.get('/help',(req,res)=>{
     res.send("These is a help Homepage")
})



app.listen(4000);
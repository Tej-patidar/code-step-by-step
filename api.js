const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json());
app.get('/',async(req,res)=>{
    let data =await dbConnect();
   data =await data.find().toArray();
    console.log(data)
    res.send(data)
})

app.post('/',async(req,res)=>{
    const data =await dbConnect();
    const result =await data.insertOne(req.body);
    console.log(result)
    res.send(result)
})

app.listen(4000)
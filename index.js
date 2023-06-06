const express = require("express");
require("./config");
const product = require("./product");
const app = express();
app.use(express.json())

// For creating Data 
app.post("/create", async(req, res) => {
  let data = new product(req.body) ;
  let result = await data.save();
  console.log(result)
  // console.log(req.body);
  res.send("done!!");
});

// For get the List of the data 
app.get('/list',async(req,res)=>{
  let data =await product.find();
  console.log(data)
  res.send('list..!!!')
})


// for deleting data 

app.delete('/delete/:_id',async(req,res)=>{
  const data = await product.deleteOne(req.params);
  console.log(req.params)
  res.send(data);
})

// for update data 

app.put('/update/:_id',async(req,res)=>{
  const data = await product.updateOne(req.params,{$set:req.body});
  res.send(data);
})



app.listen(4000);

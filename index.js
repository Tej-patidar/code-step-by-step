const express = require("express");
require("./config");
const product = require("./product");
const app = express();
app.use(express.json())
app.post("/create", async(req, res) => {
  let data = new product(req.body) ;
  let result = await data.save();
  console.log(result)
  // console.log(req.body);
  res.send("done!!");
});

app.listen(4000);

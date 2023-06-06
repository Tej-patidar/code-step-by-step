const express = require("express");
require("./config");
const product = require("./product");
const app = express();
app.use(express.json());

// For search Data
app.get("/search/:key", async (req, res) => {
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  console.log(data);
  res.send(data);
});

app.listen(4000);

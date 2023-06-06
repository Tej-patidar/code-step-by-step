const mongoose = require("mongoose");

   mongoose.connect("mongodb://127.0.0.1:27017/E-com");
  const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    brand: String,
    category: String,
  });
  const main = async () => {

  const product = mongoose.model("products", productSchema);

  let data = new product({
    name: "m-15",
    price: 2400,
    brand: "Realme",
    category: "mobile",
  });

  let result = await data.save();
  console.log(result);
};

const updateData = async()=>{
const product = mongoose.model('products',productSchema);
let data = await product.updateOne(
  {name:'m-10'}, {$set:{price:10, name:'Apna-brand'}})
  console.log(data)
}

// main()
// updateData();


const deleteData = async()=>{
  const product = mongoose.model('products', productSchema);
  let data = await product.deleteOne({name:'m-10'})
  console.log(data)
}
// deleteData();


const findData = async()=>{
  const product = mongoose.model('products', productSchema);
  let data = await product.find()
  console.log(data)
}
findData();
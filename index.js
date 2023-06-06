const mongoose = require('mongoose');



const main =async()=>{
  await mongoose.connect('mongodb://127.0.0.1:27017/E-com');
  const productSchema = new mongoose.Schema(({
    name:String,
    price:String,
  }))

  const productsModel = mongoose.model('products',productSchema);

  let data = new productsModel({
    name:"m-10",
    price:3000,
  })

  let result = await data.save();
  console.log(result)
}

main();
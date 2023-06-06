const dbconnect = require('./mongodb');

const updatedata=async()=>{
    let data =await dbconnect();
    let result =await data.updateOne({name:'Apple-2'},{$set:{name:'m-41'}})

    console.log(result)
}
updatedata();
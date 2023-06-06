const dbConnect = require('./mongodb');
const dbconnect = require('./mongodb');

const deleteData = async()=>{
    let data =await dbConnect();
    let result = await data.deleteMany({name:'note-6'})

    if(result.acknowledged){

        console.log("data Deleted !!")
    }
    console.log(result)
}

deleteData();
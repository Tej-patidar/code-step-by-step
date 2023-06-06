const dbconnect = require('./mongodb');
const insert = async()=>{
const db = await dbconnect()
const result =await db.insertMany([
    {
    name: 'note-5',
    brand:'iphone',
    category:'mobile',
    price:50000,
},

{
    name: 'note-6',
    brand:'iphone-12',
    category:'mobile',
    price:60000,
},
]);
if(result.acknowledged){
    console.log('Data InserTed !!!!')
}
}

insert();
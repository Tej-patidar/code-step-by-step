// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';

// const client = new MongoClient(url);
// const database = 'E-com';

// async function getData()
// {
//     let result =await  client.connect()
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();



// ........................... 


const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017/';
const databaseName='E-com'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)



}

getData();
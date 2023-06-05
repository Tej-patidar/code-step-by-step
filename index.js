const fs = require('fs');
const { readdir } = require('fs/promises');

const path = require("path");
const dirPath = path.join(__dirname,"CRUD")
const filepath = `${dirPath}/apple.html`;


// fs.writeFileSync(filepath, "this is my firstFile")

// fs.readFile(filepath,'utf-8',(error, data)=>{
// console.log(data)
// })

// fs.appendFile(filepath,'These is the appended text of apple.txt',(err)=>{
//     if(!err)console.log("file updated sucess !!!")
// })

// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)console.log("fileName updated sucess !!!")

// })

fs.unlinkSync(`${dirPath}/fruit.txt`)
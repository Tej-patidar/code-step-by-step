const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'file')
// for (let i = 0; i<5; i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt', "a simmple Text FIle");
// }


fs.readdir(dirPath,(error,file)=>{
    file.forEach((item)=>{
        console.log(item)
    })
})
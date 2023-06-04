const http = require("http");


http.createServer((req,res)=>{
    res.write("<h1>helllo these is server</h1>");
    res.end()
}).listen(4500);


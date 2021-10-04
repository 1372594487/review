var http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.send('succeed')
    res.end()
}).listen(3000,()=>{
    console.log("running in 3000");
})
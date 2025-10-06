const http = require('http');

 const server = http.createServer((req, res) =>{
    res.write("hhhhh");
    res.end();
});
server.listen(3000,()=>{
    console.log("server ruuning on the 3000 port");
    

})
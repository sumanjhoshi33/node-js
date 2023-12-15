const { NOTIMP } = require("dns");
const http= require("http");
const port =8081;
http.createServer((req,res)=>
{
res.writeHead(200,{"content-type":"text/html"});
res.write("<h6>hey we got our srver here for nodmon</h6>");
res.end();
})
.listen(port,()=>{
    console.log( `node js server starting running on port  ${port}`);
});



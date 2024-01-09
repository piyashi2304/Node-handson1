const http = require('http')
const Data = require("./data")

const app = http.createServer((req,res)=>{
    if(req.url==="/"){
    res.write("hello")
    res.end()
    }
    else if(req.url==="/http"){
        res.write("<h1>Hello World</h1>")
        res.end()
    }
    else if(req.url ==='/data'){
       const stringdata= JSON.stringify(Data)
       res.write(stringdata)
       res.end() 
    }

})
app.listen(5000,()=>{
    console.log("server is running")
})
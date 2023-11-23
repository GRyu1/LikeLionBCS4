const express = require("express");

const app = express();

const port = 3010;

app.get('/',(req,res)=>{
    return res.send("Hello, express!123");
})
app.get('/init',(req,resp)=>{
    return resp.send("22");
})

app.listen(port,()=>{
    console.log(`Server is Listening on port : ${port}`)
})
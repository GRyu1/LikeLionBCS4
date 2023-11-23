const express = require("express");
const cors = require("cors");

const app = express();
const port = 3010;

app.use(cors());

let count =0;

app.get('/',(req,res)=>{
    return res.send("Hello, express!123");
})

app.get('/count', (req, resp) => {
    count++
    
    return resp.json({count:count});
})

app.listen(port,()=>{
    console.log(`Server is Listening on port : ${port}`)
})
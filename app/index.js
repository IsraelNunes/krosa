const express = require("express")
const app = express()


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/receive_product", (res, req)=>{
    res.end(req.query.name, req.query.price)
})

app.listen(5000, ()=>{
    console.log(`app listing on`)
})
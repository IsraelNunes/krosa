var express = require('express')
var app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    express: true
}))

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get("/", (req, res)=>{
    res.render("addProduct")
})

app.get("/receive_product", (res, req)=>{
    res.end(req.query.name, req.query.price)
})

app.listen(5000, ()=>{
    console.log(`app listing on`)
})
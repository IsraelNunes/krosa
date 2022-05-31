var express = require('express')
var app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extented: true
}))

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/admin", (req, res)=>{
    res.render("adicionarProduto")
})

app.post("/receive_product", (req, res)=>{
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})

app.listen(5000, ()=>{
    console.log(`app listing on`)
})
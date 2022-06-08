var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const router = express.Router()

var product = {}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extented: true
}))

router.get("/", (req, res)=>{
    res.render("index")
})

router.get("/admin", (req, res)=>{
    res.render("addProduct")
})

router.post("/receive_product", (req, res)=>{

    res.send(JSON.stringify(req.body))
    console.log(product)
})

router.get("/receive_product", (req, res)=>{

    req.send(JSON.stringify(req.body))
    console.log(product)
})

router.get('/module', (req, res)=>{
    console.log('GET request in places')
    res.json({message: 'It works!'})
})

module.exports = router
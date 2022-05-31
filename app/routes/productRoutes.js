var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const { Router } = require('express')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extented: true
}))

const router = express.Router()

router.get("/", (req, res)=>{
    res.render("index")
})

router.get("/admin", (req, res)=>{
    res.render("adicionarProduto")
})

router.post("/receive_product", (req, res)=>{
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})

router.get('/module', (req, res)=>{
    console.log('GET request in places')
    res.json({message: 'It works!'})
})

module.exports = router
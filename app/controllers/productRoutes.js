var express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const Product = require('../models/main')

let product = []

router.get("/", (req, res)=>{
    res.render("index")
})

router.get("/admin/add", (req, res)=>{
    res.render("addProduct", {title:"Adicionar produto", confirm: "Cadastrar produto", remove: false})
})

router.get("/admin/edit", (req, res)=>{
    res.render("addProduct", {title:"Editar produto", confirm: "Confirmar alterações", remove: true})
})


router.post("/receive_product", async (req, res)=>{
    await Product.create(req.body) 
    console.log(product)
    res.send(JSON.stringify(req.body))
})


router.get('/module', (req, res)=>{
    console.log('GET request in places')
    res.json({message: 'It works!'})
})

module.exports = router
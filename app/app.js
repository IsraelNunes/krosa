var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const productRoutes = require('./routes/productRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extented: true
}))

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(productRoutes)

app.listen(5000, ()=>{
    console.log(`app listing on`)
})
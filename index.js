const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { createProduct } = require('./helpers')

mongoose.connect('mongodb://test:test123@ds243317.mlab.com:43317/interview-3')
  .then(() => {
    console.log('connected to mlab')

    // Uncomment to create more products
    // createProduct()
  })

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
const productRoutes = require('./routes/product')
app.get('/product', productRoutes.getProducts)
app.post('/product', productRoutes.saveProducts)
app.delete('/product', productRoutes.deleteProducts)

app.listen(8080, () => console.log('connected on port 8080'))

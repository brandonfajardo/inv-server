const Product = require('../models/product')
const mongoose = require('mongoose')
const _ = require('lodash')


exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).catch(() => {
      throw new Error('Server was unable to fetch products')
    })

    if (!_.isNil(products)) {
      res.send(products)
    }
  } catch (e) {
    res.send({ error: e.message })
  }
}

exports.saveProducts = async (req, res) => {
  const { modifiedProducts } = req.body

  try {
    modifiedProducts.forEach(async product => {
      await Product.findOneAndUpdate({ _id:  mongoose.Types.ObjectId(product.id) }, {
        currentVolume: product.currentVolume
      })
      .catch(e => {
        throw new Error('Server unable to update')
      })
    })
    res.send(modifiedProducts)
  } catch (e) {
    res.send({ error: e.message })
  }
}

exports.deleteProducts = async (req, res) => {
  const { deletedProducts } = req.body

  try {
    await Product.remove({ _id: { $in: deletedProducts }})
      .then(() => {
        res.send(deletedProducts)
      })
      .catch(() => {
        throw new Error('Server was unable to delete product')
      })
  } catch (e) {
    res.send({ error: e.message })
  }
}
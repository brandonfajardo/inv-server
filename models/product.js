const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  archived: Boolean,
  boxSize: Number,
  category: String,
  cutoff: Number,
  deliveryDays: Object,
  description: String,
  fisherId: String,
  hidden: Boolean,
  imageUrl: String,
  leadTime: Number,
  minQuantity: Number,
  name: String,
  productId: String,
  purchasePrice: Number,
  regionId: String,
  selectedDay: String,
  sellingPrice: Number,
  timestamp: Number,
  trackingId: String,
  unitQuantity: String,
  currentVolume: Number,
})

module.exports = mongoose.model('products', productSchema)
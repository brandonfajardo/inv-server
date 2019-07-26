const Product = require('./models/product')

exports.createProduct = () => {
  const qty = Math.floor(Math.random() * 100)

  Product.create({
    currentVolume: qty,
    archived: false,
    boxSize: 1,
    category: "Frozen,Whole,Oysters",
    cutoff: 18,
    deliveryDays: {friday: true, monday: true, saturday: true, thursday: true, tuesday: true },
    description: "Sockeye salmon are distinguished by their bright red and rich fillets, which is also what makes them prized by sushi chefs. These salmon hatch in fresh water, spend part of their life feeding in the ocean and then “run” back to their natal rivers to spawn and die. ↵↵Sockeye have a bright blue or bluish green back and silver belly. Upon returning to fresh water, their skin turns bright red with light green heads. They are a muscular fish with large glistening scales. The sockeye’s oily richness and firm flesh make it perfect for grilling.  Our whole Salmon are 6-9lbs per fish.",
    fisherId: "imYzcK2Y12X1du9Da2k7ygO4FV81",
    hidden: false,
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/duckr-b8e76.appspot.com/o/products%2F-LeNOwu63tK5JAEl2dFT?alt=media&token=c9a60b89-20cb-4e77-b7a1-477bc0d0ea9f",
    leadTime: 5,
    minQuantity: qty,
    name: `Sample fish ${Math.floor(Math.random() * 100)}`,
    productId: "-LeNOwu63tK5JAEl2rJX",
    purchasePrice: Math.floor(Math.random() * 100),
    regionId: "-K_B1FCXvwC9mm2lQJnJ",
    selectedDay: "Tuesday, 25 Jun 2019",
    sellingPrice: 9.14,
    timestamp: 1557335101093,
    trackingId: "jxb9m9to187",
    unitQuantity: "lb",
  }).then(() => console.log('product created!'))
}
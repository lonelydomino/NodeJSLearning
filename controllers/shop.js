
const { redirect } = require('express/lib/response')
const Product = require('../models/product')



  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            products: products, 
            pageTitle: 'All Products', 
            path: '/products'
          })
      })
  }

  exports.getProduct =(req,res, next) => {
    const productId = req.params.productId
    Product.findById(productId, product => {
      console.log(product)
    })
    res.redirect('/')
  }

  exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/index', {
          products: products, 
          path: '/',
          pageTitle: 'Shop'
        })
    })
  }

  exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart'
    })
  }

  exports.getOrders = (req, res, next) =>{
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders'
    })
  }

  exports.getCheckout = (req, res, next) => {
    res.render('/checkout', {
      path: '/checkout',
      pageTitle: 'Check out'
    })
  }
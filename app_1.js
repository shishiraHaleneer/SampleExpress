const express = require('express')
const app = express()
const app_2 = require('./app_2.js')
var birds = require('./birds')

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
  console.log(app_2.display_pop_up())
})

app.route('/book')
  .get(function(req,res){
    res.send("get a Random book")
  })
  .post(function(req,res){
    res.send("Add this book")
  })
  .put(function(req,res){
    res.send("Update book info")
  })
  .delete(function(req,res){
    res.send("delete this book")

  })

app.use('/birds',birds)


app.listen(3000,function(){
  console.log("Hello world from express app1.js");
})

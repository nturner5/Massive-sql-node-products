
///This is the right order. Order is super important!!!!
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://postgres:@localhost/sandbox"

var db = massive.connectSync({connectionString : connectionString})


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', db);

var controller = require('./controller.js');


// var db = app.get('db');


app.post('/addProd', controller.create)
app.get('/products', controller.readAll)
app.get('/products/:id', controller.showProd)
app.put('/products/:id', controller.update)
app.delete('/products/:id', controller.delete)
// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

// controller.getPlanes()
// db.get_planes(function(err, planes){
//   console.log(err, planes)
// })



app.listen('3000', function(){
  console.log("Successfully listening on : 3000")	
})


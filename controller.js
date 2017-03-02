var app = require('./index');
 var db = app.get('db');
module.exports = {
    // getPlanes: function(req, res){
    //     var db = app.get('db');

    //     db.get_planes([25], function(err, planes){
    //         console.log(err, planes);
    //         res.send(planes)
    //     })
    // }
    
     create: function(req, res){
        // var db = app.get('db');

        db.createProduct([req.body.productname, req.body.description, req.body.price, req.body.imageUrl], function(err, prod){
            console.log(err, 'Product Added');
           
    })
},

    readAll: function(req, res){
        // var db = app.get('db');

        db.readProducts(function(err, prod){
            console.log(err, 'all products');
            res.send(prod);
           
    })

},

showProd: function(req, res){
    db.readProduct(req.params.id, function(err, prod){

res.send(prod)
    })
},

update: function(req, res){
    console.log(req.params.id + req.body.description)
    db.updateProduct([req.params.id, req.body.description], function(err, prod){
if(err){
    res.status(500).send(err)
}
//res.sendStatus(200,'updated no problem')
res.status(200).send("Updated!!")
    })
},

delete: function(req, res){
    db.deleteProduct(req.params.id, function(err, prod){
        if(err){
    res.status(500).send(err)
}
//res.sendStatus(200,'updated no problem')
res.status(200).send("Deleted!")
    })
}



}
 const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose')
 var app = express();
 app.use(bodyParser.json());


 mongoose.connect('mongodb://mongo/myapp', { useNewUrlParser: true, server: { auto_reconnect: true } });

 var UserModel = mongoose.model('user', new mongoose.Schema({ name: String }));

 app.post('/user', (req, res) => {

     var user = new UserModel({
         name: req.body.username
     });
     user.save((err) => {
         if (err) {
             res.status(503).json({
                 message: "Failed to Process"
             })
         }

     });
     UserModel.find({}, (err, docs) => {
         if (err) {
             res.status(503).json({
                 message: "Failed to Process"
             })
         }
         res.json(docs);
     })

 });

 app.listen(3000, () => {
     console.log("This is the new chage you should see in log")
     console.log('App listening on port 3000!');
 }); //#endregion
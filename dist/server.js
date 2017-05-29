const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const Call = require('../app/model/call');
const bodyParser = require('body-parser');

module.exports = {
  app: function () {
    const app = express();
    const router = express.Router();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));
    //db config
    mongoose.connect('mongodb://yongpark:mlabpassword@ds153501.mlab.com:53501/twilioalarm');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/dist', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath); });
    router.get('/', function(req, res) {
      res.json({ message: 'API Initialized!'});
    });

    router.route('/calls')
      .get(function(req,res){
        Call.find(function(err, calls) {
          if (err)
          res.send(err);
          res.json(calls);
        });
      })
    .post(function(req, res) {
       var call = new Call();
       //body parser lets us use the req.body
       call.phoneNumber = req.body.phoneNumber;
       call.message = req.body.message;

       call.save(function(err) {
       if (err)
       res.send(err);
       res.json({ message: 'Comment successfully added!'});
       });
     });

    app.use('/api', router);

    return app;
  }
};

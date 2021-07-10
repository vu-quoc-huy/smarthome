const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var mqtt = require('./src/mqtt/index')
mongoose.connect('mongodb+srv://quochuy:10112000@cluster0.th0zi.mongodb.net/smarthome?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected!");
}).catch((err) => {
    console.log(err);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }))
var router = require('./src/router/index');
router(app);
app.use(()=>{
    mqtt
})
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + 'not found' });
});
app.listen(port);
console.log('RESTful API server started on: ' + port);
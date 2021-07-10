const temperatureRoute = require('./temperatureRouter')
const userRoute = require('./userRouter')
module.exports=(app)=>{
    app.use('/',[
        temperatureRoute,
        userRoute
    ])
}
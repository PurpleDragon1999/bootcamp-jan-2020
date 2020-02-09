//mongoose is a wrapper of mongodb
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/bootcamp"

//?????????????????????????????????????????????????
mongoose.Promise = global.Promise;
//?????????????????????????????????????????????????

//Connecting to database
mongoose.connect(url, {useNewUrlParser: true,
                        keepAlive: 1}).then((res) => {
                            console.log("Connection Established");
                            // console.log(res);
                        }).catch(error => {
                            console.log(error.message);
                        });
module.exports = mongoose;
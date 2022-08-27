const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err,res) => {
        
        if(!err){
            console.log('*** CONEXION CORRECTA =D ***')
        }else{
             console.log('*** ERROR DE CONEXION D= ***')
             console.log(err)
        }
    }
    );

};

module.exports = dbConnect
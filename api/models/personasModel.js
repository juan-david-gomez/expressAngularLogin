var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;
var config = require(__dirname+'/../../server/config');

mongoose.connect(config.mongodbConnection);

var persona = new Schema({  
  nombre:   { type: String },
  sexo:     { type: String },
  pareja:   { type: Number },
  email:    { type: String },
  clave:    { type: String }
},{
    timestamps: true
});

module.exports = mongoose.model('persona', persona);  

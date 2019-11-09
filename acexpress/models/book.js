var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var book= new Schema(
    {name:String,email:String,password:String,rating:Number}
);
mongoose.model('books',book);
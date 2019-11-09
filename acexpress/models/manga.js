var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var manga= new Schema(
    {email:String,username:String,password:String,}
);
mongoose.model('mangas',manga);
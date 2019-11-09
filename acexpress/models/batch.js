var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var superhero= new Schema(
    {name:String,date:String,time:String}
);
mongoose.model('superheroes',superhero);
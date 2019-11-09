var express = require('express');
var router = express.Router();
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Register */
// router.post('/register', function(req, res, next) {
//   res.json({login:true});
// });
require('../models/manga');
var mongoose = require('mongoose');
var Manga= mongoose.model('mangas');
require('../models/book');
var UserRegister=mongoose.model('books')
router.post('/add', function(req, res) {
  new Manga({email : req.body.email,
     username : req.body.username,
    password : req.body.password
 
 
  })
  .save(function(err, manga) {
    console.log(manga)
    res.json(manga);
  });
});

router.get('/view',function(req,res){
  Manga.find(function(err,manga){
    console.log(err);
    console.log(manga);
    res.json(manga);
  });
});
require('../models/book');
var Book=mongoose.model('books');
router.post('/newadd', function(req, res) {
  new Book({name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    rating: req.body.ratng}
)
.save(function(err, book) {
  console.log(book)
  res.json(book);
});
});


router.get('/newview',function(req,res){
  Book.find(function(err,book){
    console.log(err);
    console.log(book);
    res.json(book);
  });
});
router.post('/addRegister',function(req,res){
  const city=req.body.city
  const email=req.body.email
  const name=req.body.name
  const password=req.body.password
  const address=req.body.address
  new UserRegister({
      address:address,
      email:email,
      name:name,
      city:city,
      password:password
  }).save(function(err,data){
      if(err){
          console.log(err)
      }
      else{
          console.log(data)
          res.json(data)
      }
  })
})

router.post('/gggg',(req,res)=>{
  console.log(req.body);
  const city=req.body.city
  const email=req.body.email
  const name=req.body.name
  const password=req.body.password
  const address=req.body.address
  new UserRegister({
      address:address,
      email:email,
      name:name,
      city:city,
      password:password
  }).save(function(err,data){
      if(err){
          console.log(err)
      }
      else{
          console.log(data)
          res.json(data)
      }
  })
})
module.exports = router;

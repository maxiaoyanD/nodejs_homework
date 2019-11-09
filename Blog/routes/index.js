var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");

var data = fs.readFileSync(path.join(__dirname,'data.json'));
dataObj = JSON.parse(data);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index',{title:'Express'} );
// });
router.get("/",function(req, res, next){
  res.render('login', {user: dataObj.users[0]});
})
router.get("/list",function(req,res,next){
  res.render('list',{chapterList:dataObj.chapterList})
})
module.exports = router;

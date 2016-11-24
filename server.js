var express = require("express");
var app = express();
var path = require("path");
// var router = express.Router();
var paths = __dirname + '/views/';

// app.use(express.static(__dirname + '/public'));  

app.use(express.static(__dirname + '/public'));


app.get('/home', function (req, res) {
	res.sendFile(path.join(__dirname + "/views/index.html"));
	
});

app.get('/about', function (req, res) {
	res.sendFile(path.join(__dirname + "/views/about.html"))
});

app.get('/contact', function (req,res) {
	res.sendFile(path.join(__dirname + "/views/contact.html"));

});

app.get('/services', function (req,res) {
	res.sendFile(path.join(__dirname + "/views/services.html"));

});

// app.get('private/bin/contact_me.php', function (req,res) {
// 	res.sendFile(path.join(__dirname + '/private/bin/contact_me.php'));

// });
// router.use(function (req,res,next) {
//   // console.log("/" + req.method);
//   next();
// });

 // //Route to get Items
 //    app.get('/api/ishlema/items', function (req, res){
 //      //here you could do great things indeed - but not now...
 //      console.log("Tutorial-Server: Get-Items -- There are ", dummyItems.length ," Items");
 //      res.json(dummyItems);
 //    });

 //    //route for serving the index.html page (sufficient for our single page app)
 //    app.get('*', function(req, res) {
 //      // load the single view file (angular will handle the page changes on the front-end)
 //      res.sendfile('./public/index.html');
 //    });

// router.get("/",function(req,res, next){
// 	console.log("Inside index.html");
//   res.sendFile(path + "index.html");
//   next();
// });

// router.get("/",function(req,res){
// 	console.log("Inside about.html");
//   res.sendFile(path + "about.html");
// });

// router.get("/6path",function(req,res){
// 	console.log("Inside 6path");
//   res.sendFile(path + "img/6path.jpg");
// });


// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });

// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });

// app.use("/",router);


// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
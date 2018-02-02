var PORT = process.env.PORT || 3000;
var request 	= require('request');
var express 	= require('express');
var path 			= require('path');
var bodyParser= require('body-parser');
var sequelize = require("sequelize");
var exphbs 		= require("express-handlebars");
var passport	= require('passport');
var session	 	= require('express-session');
var env 			= require('dotenv').load();
var app 	 		= express();


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');



// static

console.log(path.join(__dirname, 'public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

// redirect users of main page to /home
app.get('/', function(req, res){
	res.redirect('/index');
});
// Fetch a book page from gutemberg
app.get('/bookcontent', function(req, res){
  console.log("Fetching book ID: "+req.query.id + " Page number:"+ req.query.pagenumber )
  var pagesize = 3000;

  var options = {
    url: "https://www.gutenberg.org/files/"+req.query.id+"/"+req.query.id+"-0.txt",
    headers: {
      'User-Agent': 'request',
      'Accept': '*/*',
      'Host': 'www.gutenberg.org'
    }
  };

  var customHeaderRequest = request.defaults({
    headers: {'User-Agent': 'request'}
  })

  customHeaderRequest.get(options, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);

    if (error!= null){
      console.log("Error fetching page from gutemberg. Response:" + response + " error:" + error);
      res.send('error');
    }

    page = GetPage(body, req.query.pagenumber, pagesize);
    res.send(page);

  });
})



function GetPage (text, page_number, page_size){
    var book = text.split(" ");
    console.log("Book Size = " + book.length);
    var start= page_number * page_size;
    var end  = (page_number * page_size) + page_size;

    // check words is not longer than book
    if (end >= book.length){
          end = book.length-1;
    }

    if(book.length <1) {
      return "";
    }

    var page = "";
    for(var i = start; i <= end; i++) {
      page += book[i]+" ";
    }

    return page;
};



app.get('/fake/GetBookList', function(req, res) {
    res.json([{

	book_id: 11,
	author : 'Lewis Carroll',
	title : 'Alice s Adventure in Wonderland',
	year: 1994,
	picture: "https://www.alephbet.com/pictures/medium/31457_1.JPG"
	},
	{
	book_id: 84,
	author: 'Anna Frank',
	title: 'The diary of anna frank',
	year: 1947,
	picture: "https://upload.wikimedia.org/wikipedia/commons/3/3e/The_Moving_Picture_Boys_on_the_War_Front_-_Cover_-_Project_Gutenberg_etext_17744.jpg"
	},
	{
	book_id:219,
	author: 'Jhon Smith',
	title: 'Peter Pan the book',
	year:1925,
	picture:"https://www.gutenberg.org/files/26998/26998-h/images/img-cover.jpg"
	}

]);
});


//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

app.get('/articles', function(response, body){

  var parsedRes = response.articles

        console.log("Response: ", response)
        console.log("Body: ", body)

    // for (var i = 0; i < parsedRes.length; i++) {
    //   parsedRes[i]
    //   console.log(parsedRes[i].title)
    //   document.getElementById('display').text(parsedRes[i].title)

    //   console.log("parsed res : " + parsedRes[i].title)
    //     }

.fail(function(error) {
        if (error) {
            console.log(error)
              }
        })
    })



//load passport
require('./app/config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync().then(function(){
	console.log('Nice! It is working')

}).catch(function(err){
	console.log(err, "Not working")
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(3000, function(err){
  if(!err)
  console.log("Site is live"); else console.log(err)

});

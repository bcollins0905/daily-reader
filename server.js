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
  var pagesize = 700;

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
	book_id: 1342,
	author: 'Jane Austen',
	title: 'Pride and Prejudice',
	year: 1813,
	picture: "https://images-na.ssl-images-amazon.com/images/I/51uWyPyyBnL._SX331_BO1,204,203,200_.jpg"
	},
	{
	book_id:219,
	author: 'Joseph Conrad',
	title: 'Heart of Darkness',
	year:1899,
	picture:"http://img1.imagesbn.com/p/9781940177366_p0_v1_s260x420.JPG"
	},
	{
	book_id:84,
	author: 'Mary Wollstonecraft Shelley',
	title: 'Frankenstein; Or, The Modern Prometheus',
	year:1823,
	picture:"http://flixal.com/wp-content/uploads/2017/06/frlg.jpg"
  },
	{
	book_id:76,
	author: 'Mark Twain',
	title: 'Adventures of Huckleberry Finn',
	year:1884,
	picture:"https://images.gr-assets.com/books/1388463189l/19374.jpg"
	},
	{
	book_id:98,
	author: 'Charles Dickens',
	title: 'A Tale of Two Cities',
	year:1859,
	picture:"https://images.gr-assets.com/books/1488481774l/490853.jpg"
	},
	{
	book_id:1952,
	author: 'Charlotte Perkins Gilman',
	title: 'The Yellow Wallpaper',
	year:1892,
	picture:"https://i.pinimg.com/236x/f9/5a/5d/f95a5de986fe6657620e2eb1f53a2ef4--the-yellow-wallpaper-charlotte.jpg"
	},
	{
	book_id:2701,
	author: 'Herman Melville',
	title: 'Moby Dick; Or, The Whale',
	year:1851,
	picture:"https://images.gr-assets.com/books/1327940656l/153747.jpg"
	},
	{
	book_id:56481,
	author: 'Albert Bigelow Paine',
	title: 'Peanut',
	year:1913,
	picture:"https://pictures.abebooks.com/isbn/9781332422340-us-300.jpg"
},
	{
	book_id:2591,
	author: 'Jacob Grimm and Wilhelm Grimm',
	title: 'Grimms Fairy Tales',
	year:1812,
	picture:"http://www.loyalbooks.com/image/detail/Grimms-Fairy-Tales.jpg"
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

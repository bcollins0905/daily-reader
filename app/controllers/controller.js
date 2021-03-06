var exports = module.exports = {}


// render home
exports.index = function(req, res) {
	res.render('index');
};

exports.discussion = function(req, res) {
	res.render('discussion');
}

exports.bookList = function(req, res){
	res.render('bookList');
}

exports.signup = function(req, res){

	res.render('signup');
}

exports.signin = function(req, res){
	//res.render('signin');
	res.render('signin');
}


exports.dashboard = function(req, res) {

	res.render('dashboard', { firstname: req.user.firstname });
}

exports.articles = function(req, res) {

	res.render('articles');
}

exports.read = function(req, res) {
	req.session.bookid=req.query.bookid;
	req.session.title=req.query.title;
	req.session.pagenumber=req.query.pagenumber;
	res.render('read');
}

exports.logout = function(req, res){

	req.session.destroy(function(err){

		res.redirect('/signin');

	});
}

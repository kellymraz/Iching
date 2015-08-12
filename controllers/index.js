// Simple index controller
var indexController = {

	index: function(req, res){

		res.render('index', {
			user: req.user
		});
	},

	coinToss: function(req, res){
		res.render('cointoss', {
			user: req.user
		});

	},

	login: function(req, res){
		res.render("login", {user: req.user})
	},

	howto: function(req, res){
		res.render("howto", {user: req.user})

	},




};

 // Export our index control
module.exports = indexController;
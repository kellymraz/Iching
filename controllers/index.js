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
		res.render("login", {
			user: req.user
		});
	},

	howto: function(req, res){
		res.render("howto", {
			user: req.user
		});
	},

	hex27: function(req, res){
		res.render("hex27", {
			user: req.user
		})
	}

	// hexLessons: function(req, res){
	// 	res.render("hexLessons)
	// }

};

 // Export our index control
module.exports = indexController;
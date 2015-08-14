// Simple index controller


var Lesson = require("../models/lesson.js")

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

	findLesson: function(req, res){
		Lesson.findOne({hexNumber:req.params.lesson}, function(err, doc){

			res.render("lesson", {
				user: req.user,
				lesson: doc
				
			})	


		})
		
	}

	// hexLessons: function(req, res){
	// 	res.render("hexLessons)
	// }

};

 // Export our index control
module.exports = indexController;
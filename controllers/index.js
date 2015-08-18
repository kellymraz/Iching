// Simple index controller


var Lesson = require("../models/lesson.js")

var indexController = {

	index: function(req, res){

		res.render('home', {
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

	// goHome: function(req, res){
	// 	res.render("/"), {
	// 		user: req.user
	// 	});
	// },


	findLesson: function(req, res){
		console.log("params  " , req.params.lesson)
		Lesson.findOne({hexNumber:req.params.lesson}, function(err, doc){
			// console.log('lesson:  ', doc)
			// console.log('err:  ', err)
			res.render("lesson", {
				user: req.user,
				lesson: doc

			})	


		})
		
	},

	getJournal:  function(req, res){
		res.render("journal")
	}

	// hexLessons: function(req, res){
	// 	res.render("hexLessons)
	// }

};

 // Export our index control
module.exports = indexController;
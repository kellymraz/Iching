// This defines how the lessons should look in the db
// This is our schema for the lessons
var mongoose = require('mongoose');

var lessonSchema = mongoose.Schema({
	hexNumber: String,
	lessonText: String,
	imgUrl: {type:String, default:"/images/close-up-branch.jpeg"}

})

var Lesson = mongoose.model("lesson", lessonSchema);

module.exports=Lesson;


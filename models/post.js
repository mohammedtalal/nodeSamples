const mongoose = require('mongoose')
const Schema = mongoose.Schema

let postSchema = new mongoose.Schema({
	title: { type: String, default: "" },
	content: { type: String, default: "" },
	date: { type: 'Date', default: Date.now },
	views: { type: 'Number', default:0},

	//Araay of sub-document
	comments: [{
		commenter: String, // this allow field to be missing
		content: {type: String, default: ""}
	}],

	// store an id (ObjectId) of a user model 
	author: { type: Schema.Types.ObjectId, ref: "User" } // mongo add _id field by default
})

module.exports = mongoose.model("Post", postSchema)
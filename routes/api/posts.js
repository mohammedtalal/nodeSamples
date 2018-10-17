var express = require('express');
var router = express.Router();
 // Model
 const Post = require('../models/post')
 const User = require('../models/user')

// /api/posts
router.get('/', (req, res, next) => {
	// List all posts from DB
	Post.find({}, (err, data) => {
		if (err || !data) {
			console.log('error')
			return ;
		}
		res.json(data)
	})
})

router.get('/:postID', (req, res, next) => {
	//Get post where = postID
	let id = req.params.postID
	Post.findById(id, (err, data) => {
		if (err || !data) {
			console.log('error')
			return ;
		}
		res.json(data)
	})
})

router.post('/', (req, res, next) => {
	//Create new post
	let post = new Post({
		title: req.body.title,
		content: req.body.content,
	})
	post.save((err, data) => {
		 if (err || !data) {
			console.log('error')
			res.json(error: err)
			return ;
		}
		res.json(data)
	})
})

router.put('/:postID', (req, res, next) => {
	//Update exist posts 
	let id = req.params.postID
	// Post.findById(id, (err, post) => {
	// 	if (err || !post) {
	// 		console.log('error')
	// 		return ;
	// 	}
	// 	post.title = req.body.title
	// 	post.content = req.body.content
	// 	post.save((err, data) => {
	// 		 if (err || !data) {
	// 			console.log('error')
	// 			res.json(error: err)
	// 			return ;
	// 		}
	// 	res.json(post)
	// })
	
	Post.findByIdAndUpdate(id, {
		title: req.body.title,
		content: req.body.content
	}, (err, post) => {
		post.save((err, post) => {
			 if (err || !post) {
				console.log('error')
				res.json(error: err)
				return ;
			}
		res.json(post)
	})
})


router.delete('/:postID', (req, res, next) => {
	//delete exist posts
	let id = req.params.postID
	
	Post.findByIdAndRemove(id, (err, post) => {
		if (err) {
			console.log('error ' + err)
			res.json(error: err)
			return;
		}
		res.json(error: false) // success
	})
	
})


module.exports = router;
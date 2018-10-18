var express = require('express');
var router = express.Router();
 // Model
 const Post = require('../../models/post')
 const User = require('../../models/user')

// /api/posts
router.get('/', (req, res, next) => {
	// List all posts from DB
	User.find({}, (err, data) => {
		if (err || !data) {
			console.log('error')
			return ;
		}
		res.json(data)
	})
})

router.get('/:userID', (req, res, next) => {
	//Get post where = postID
	let id = req.params.userID
	User.findById(id, (err, data) => {
		if (err || !data) {
			console.log('error')
			return ;
		}
		res.json(data)
	})
})

router.post('/', (req, res, next) => {
	//Create new post
	let user = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	})
	post.save((err, data) => {
		 if (err || !data) {
			console.log('error')
			res.json({error: err})
			return ;
		}
		res.json(data)
	})
})

router.put('/:userID', (req, res, next) => {
	//Update exist posts 
	let id = req.params.userID
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
	// 			res.json({error: err})
	// 			return ;
	// 		}
	// 	res.json(post)
	// })
	
	Post.findByIdAndUpdate(id, {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	}, (err, user) => {
		 if (err || !user) {
			console.log('error')
			res.json({error: err})
			return ;
		}
		res.json(user)
	})
})


router.delete('/:userID', (req, res, next) => {
	//delete exist posts
	let id = req.params.userID
	
	User.findByIdAndRemove(id, (err, post) => {
		if (err) {
			console.log('error ' + err)
			res.json({error: err})
			return;
		}
		res.json({error: false}) // success
	})
	
})


module.exports = router;
var express = require('express');
var router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res, next) => {
	res.render('index')
})

router.get('/contact', (req, res, next) => {
	res.render('contact')
})

router.get('/post-new', (req, res, next) => {
	res.render('post-new')
})

router.get('/posts/:postID', (req, res, next) => {
	Post.findById(req.params.postID).then((post) => {
		res.render('post',{post});
	})
	.catch((err) => console.log("Error ", err));
})

router.get('/posts/:postID/edit', (req, res, next) => {
	Post.findById(req.params.postID).then((post) => {
		res.render('post-edit',{post});
	})
	.catch((err) => console.log("Error ", err));
})

module.exports = router;
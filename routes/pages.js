var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index')
})

router.get('/contact', (req, res, next) => {
	res.render('contact')
})

router.get('/post-new', (req, res, next) => {
	res.render('post-new')
})

router.get('/post/:postID', (req, res, next) => {
	res.render('post')
})

router.get('//post/:postID/edit', (req, res, next) => {
	res.render('post-edit')
})

module.exports = router;
var express = require('express');
var router = express.Router();

// /api/posts
router.get('/', (req, res, next) => {
	// List all posts from DB
})

router.get('/:postID', (req, res, next) => {
	//Get post where = postID
})


router.post('', (req, res, next) => {
	//Create new post
})

router.put('/:postID', (req, res, next) => {
	//Update exist posts
})


router.delete('/:postID', (req, res, next) => {
	//delete exist posts
})


module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/contact', (req, res,next) => {
	res.render('contact');
});

router.post('/contact', (req, res, next) => {
	let {email, subject, message} = req.body
	let data = {
		'from': email,
		'subject': subject,
		'message': message
	}
	res.render('contact-success', {data})
});

module.exports = router;

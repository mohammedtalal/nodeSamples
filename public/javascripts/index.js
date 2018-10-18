$(document).ready(function () {
	console.log('Index is loaded');

	let offset = 0
	let limit = 6

	getPosts(offset, limit)
})

function getPosts(offset, limit) {
	$.ajax({
		method: 'GET',
		url: `/api/posts?limit=${limit}&offset=${offset}`,

		success: (data) => {
			// redirect to posts page
			console.log(data)
			for (var i = 0 ; i < data.length ; i++) {
				let post = data[i]
				$('#pagesList').append(`<li> <a href="/posts/${post._id}"> ${post.title} </a> </li>`)
			}
		},

		error: (err) => {
			console.log(err)
		}
	})
}
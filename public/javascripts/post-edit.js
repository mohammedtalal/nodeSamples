$(document).ready(function () {
	let postID = $('#postID').val()
	console.log(postID);

	$('#form').on('submit', (event) => {
		event.preventDefault();

		$.ajax({
			method: 'PUT',
			url: `/api/posts/${postID}`,
			data: {
				title: $('#postTitle').val(),
				content: $('#postContent').val()
			},

			success: (data) => {
				// redirect to posts page
				console.log('data: ', data)
				location = `/posts/${data._id}`
			},
			error: (err) => {
				console.log('Error ', err)
			}
		})
	})
})
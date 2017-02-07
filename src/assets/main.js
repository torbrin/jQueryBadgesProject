$(function() {

  // your code will go here
  // https://www.codeschool.com/users/edspry.json
	$.ajax({
		url: 'https://www.codeschool.com/users/edspry.json',
		dataType: 'jsonp',
		success: function(response) {
			$.each(response.courses.completed, function(key, value) {
				$('#badges').append(
					'<div class="course">' +
						'<h3>' + value.title + '</h3>' +
						'<img src="' + value.badge + '">' +
						'<a href="' + value.url + '" class="btn btn-primary" target="_blank">See Course</a>' +
					'</div>'
				);
			});
		}
	});
});

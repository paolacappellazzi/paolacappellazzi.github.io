(function () {

	var user = ['p', 'c', 'a', 'p', 'p', 'e'].join('');
	var domain = ['m', 'p', 'p', '.', 'm', 'p', 'g', '.', 'd', 'e'].join('');
	var words = user + ' [at] ' + domain.replace(/\./g, ' [dot] ');

	document.addEventListener('DOMContentLoaded', function () {

		var toggle = document.getElementById('email-toggle');
		var popup = document.getElementById('email-popup');

		if (!toggle || !popup)
			return;

		popup.textContent = words;

		toggle.addEventListener('click', function (event) {
			event.preventDefault();
			popup.hidden = !popup.hidden;
		});

	});

})();

document.addEventListener('DOMContentLoaded', () => {
	const addButton = document.querySelector('.btn-add, #btn-add');
	const popup = document.querySelector('.pop-up, #pop-up');

	if (!addButton || !popup) return;

	addButton.addEventListener('click', () => {
		popup.hidden = false;
		popup.style.display = 'block';
		popup.classList.add('show');
	});
});

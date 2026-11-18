document.addEventListener('DOMContentLoaded', () => {
	const addButton = document.querySelector('.btn-add, #btn-add');
	const popup = document.querySelector('.pop-up, #pop-up');
	const confirmButton = document.querySelector('.btn-confirm, #btn-confirm');
	const itemList = document.querySelector('.itemlist, #itemlist');

	if (addButton && popup) {
		addButton.addEventListener('click', () => {
			popup.hidden = false;
			popup.style.display = 'block';
			popup.classList.add('show');
		});
	}

	if (confirmButton && itemList) {
		confirmButton.addEventListener('click', () => {
			const input = popup?.querySelector('input, textarea');
			const value = input?.value.trim();
			if (!value) return;

			const item = document.createElement('li');
			item.textContent = value;
			itemList.appendChild(item);

			input.value = '';
			if (popup) {
				popup.hidden = true;
				popup.style.display = 'none';
				popup.classList.remove('show');
			}
		});
	}
});



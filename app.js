document.addEventListener('DOMContentLoaded', () => {
	const addButton = document.querySelector('.btn-add, #btn-add');
	const popup = document.querySelector('.pop-up, #pop-up');
	const confirmButton = document.querySelector('.btn-confirm, #btn-confirm');
	const cancelButton = document.querySelector('.btn-cancel, #btn-cancel');
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
				const nameInput = document.querySelector('#input-name, .input-name');
			const numInput = document.querySelector('#input-num, .input-num');
			const unitInput = document.querySelector('#input-unit, .input-unit');
				const name = nameInput?.value.trim();
			const num = numInput?.value.trim();
			const unit = unitInput?.value.trim();
				if (!name || !num || !unit) return;
			const typeInput = document.querySelector('#input-type');
			const type = typeInput?.value;

			const item = document.createElement('li');
				item.dataset.type = type;
				const nameText = document.createElement('span');
				nameText.textContent = `${name} `;
				const itemNumInput = document.createElement('input');
				itemNumInput.type = 'number';
				itemNumInput.value = num;
				itemNumInput.min = '0';
				const unitText = document.createElement('span');
				unitText.textContent = unit;
				item.append(nameText, itemNumInput, unitText);
			itemList.appendChild(item);

				if (nameInput) nameInput.value = '';
			if (numInput) numInput.value = '';
			if (unitInput) unitInput.value = '';
			if (popup) {
				popup.hidden = true;
				popup.style.display = 'none';
				popup.classList.remove('show');
			}
		});
	}

	if (cancelButton && popup) {
		cancelButton.addEventListener('click', () => {
			popup.hidden = true;
			popup.style.display = 'none';
			popup.classList.remove('show');
		});
	}	const tabButtons = document.querySelectorAll('.item-tab button');

	tabButtons.forEach(button => {
    	button.addEventListener('click', () => {
        	const selectedType = button.dataset.type;

        	document.querySelectorAll('#itemlist li').forEach(item => {

            	if (
                	selectedType === 'all' ||
                	item.dataset.type === selectedType
            	) {
                	item.style.display = '';
            	} else {
                	item.style.display = 'none';
            	}

         	});
    	});
	});


});


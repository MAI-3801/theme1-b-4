document.addEventListener('DOMContentLoaded', () => {
	const addButton = document.querySelector('.btn-add, #btn-add');
	const popup = document.querySelector('.pop-up, #pop-up');
	const confirmButton = document.querySelector('.btn-confirm, #btn-confirm');
	const cancelButton = document.querySelector('.btn-cancel, #btn-cancel');
	const itemList = document.querySelector('.itemlist, #itemlist');
	let editingItem = null;
	let currentTab = 'all';

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

			if (editingItem) {
    			editingItem.querySelector('.item-name').textContent = name;

    			editingItem.querySelector('.item-num').value = num;

    			editingItem.querySelector('.item-unit').textContent = unit;

    			editingItem.dataset.type = type;

    			editingItem = null;
				document.querySelectorAll('#itemlist li').forEach(item => {

    				if (
       					currentTab === 'all' ||
        				item.dataset.type === currentTab
    				) {
        				item.style.display = '';
    				} else {
        				item.style.display = 'none';
    				}

			});
			}
			else{
				const item = document.createElement('li');
				item.dataset.type = type;
				const nameText = document.createElement('span');
				nameText.classList.add('item-name');
				nameText.textContent = `${name} `;
				const itemNumInput = document.createElement('input');
				itemNumInput.type = 'number';
				itemNumInput.value = num;
				itemNumInput.min = '0';
				itemNumInput.classList.add('item-num');
				const unitText = document.createElement('span');
				unitText.textContent = unit;
				unitText.classList.add('item-unit');
				const editButton = document.createElement('button');
				editButton.textContent = '編集';
				editButton.addEventListener('click', () => {
					editingItem = item;
    				nameInput.value = nameText.textContent.trim();
    				numInput.value = itemNumInput.value;
    				unitInput.value = unitText.textContent;
    				typeInput.value = item.dataset.type;

    				popup.hidden = false;
    				popup.style.display = 'block';
    				popup.classList.add('show');
				});
				item.append(nameText, itemNumInput, unitText, editButton);
			itemList.appendChild(item);
			}

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
			currentTab = button.dataset.type;

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


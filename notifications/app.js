const items = document.querySelectorAll('.new');
const unReads = document.querySelectorAll('.un-read');
const amount = document.getElementById('amount');

document.getElementById('mark_read').addEventListener('click', () => {
	amount.textContent = 0;

	items.forEach((item) => {
		item.style.backgroundColor = 'transparent';
	})
	
	unReads.forEach((unRead) => {
		unRead.style.setProperty('--Red', 'transparent');
	})
})

items.forEach((item, index) => {
	item.addEventListener('click', () => {
		item.style.backgroundColor = 'transparent';

		const amountInt = parseInt(amount.textContent)

		if(amountInt > 0 ) amount.textContent = amountInt - 1;
		
		document.getElementById(`item_${index+1}`).style.setProperty('--Red', 'transparent')
	})
})


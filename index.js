const openEl = document.querySelector('.open')
const modalConEl = document.querySelector('.modal-container')
const closeEl = document.querySelector('.close')

openEl.addEventListener('click', function() {
	modalConEl.classList.add('show')
})
closeEl.addEventListener('click', function() {
	modalConEl.classList.remove('show')
})
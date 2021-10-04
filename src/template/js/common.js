var html = document.querySelector('html'),
		body = document.querySelector('body'),
		wrap = document.querySelector('.wrap');

new fullpage('#full_page', {
	//options here
	menu: '#nav',
	autoScrolling:true,
	scrollHorizontally: true,
	navigation: true,
	navigationPosition: 'left',
	showActiveTooltip: true,
	navigationTooltips: ['', 'Mission', 'Technologies', 'Products', 'Let\'s connect'],
	responsiveWidth: 768,
	responsiveHeight: 650,
});

let nav = document.querySelector('.header__nav'),
		ham = document.querySelector('.header__ham'),
		classToggle = '--toggle';


ham.addEventListener('click', ()=>{
	ham.classList.toggle(classToggle);
	nav.classList.toggle(classToggle);
});

nav.addEventListener('click', (event)=>{
	if (event.target.closest('li')) {
		ham.classList.remove(classToggle);
		nav.classList.remove(classToggle);
	}
});
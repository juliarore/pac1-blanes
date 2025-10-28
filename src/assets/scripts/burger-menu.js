document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.header__burger');
	const navMenu = document.getElementById('nav-menu');
	if (burger && navMenu) {
		burger.addEventListener('click', () => {
			const expanded = burger.getAttribute('aria-expanded') === 'true';
			burger.setAttribute('aria-expanded', !expanded);
			navMenu.classList.toggle('active');
		});
	}
});

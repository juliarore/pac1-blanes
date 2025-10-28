document.addEventListener('DOMContentLoaded', () => {
	const aboutText = document.getElementById('about-text');
	const seeMoreBtn = document.getElementById('about-see-more');
	if (aboutText && seeMoreBtn) {
		seeMoreBtn.addEventListener('click', () => {
			const expanded = aboutText.classList.toggle('expanded');
			seeMoreBtn.textContent = expanded ? 'Ver menos' : 'Ver más';
			seeMoreBtn.setAttribute('aria-expanded', expanded);
		});
	}
});

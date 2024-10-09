export { toggleMenu };

const rootElem = document.documentElement;
const pageNavItems = document.querySelectorAll("#pageNav a")

function toggleMenu() {
	if (rootElem.classList.contains("asideOpen")) {
		rootElem.classList.remove("asideOpen")
		for (const pageNavItem of pageNavItems) {
			pageNavItem.removeEventListener('click', toggleMenu, false);
		}
	} else {
		rootElem.classList.add("asideOpen")
		for (const pageNavItem of pageNavItems) {
			pageNavItem.addEventListener('click', toggleMenu, false);
		}
	}
}

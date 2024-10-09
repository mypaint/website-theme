export { switchTheme, watchFavicon };

const rootElem = document.documentElement;
let currentTheme = localStorage.getItem("currentTheme")

function setTheme() {
	switch (currentTheme) {
		case "lightTheme":
			rootElem.classList.add("lightTheme");
			rootElem.classList.remove("darkTheme");
			rootElem.classList.remove("systemTheme");
			break;
		case "darkTheme":
			rootElem.classList.remove("lightTheme");
			rootElem.classList.add("darkTheme");
			rootElem.classList.remove("systemTheme");
			break;
		default:
			rootElem.classList.remove("lightTheme");
			rootElem.classList.remove("darkTheme");
			rootElem.classList.add("systemTheme");
			break;
	}
}

function rotateThemes() {
	switch (currentTheme) {
		case "systemTheme":
			currentTheme = "darkTheme"
			break;
		case "darkTheme":
			currentTheme = "lightTheme"
			break;
		case "lightTheme":
			currentTheme = "systemTheme"
			break;
	}
	localStorage.setItem("currentTheme", currentTheme);
}

function switchTheme() {
	rotateThemes();
	setTheme();
}

// Favicon
const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
const lightSchemeIcon = document.querySelector('link#faviconDark');
const darkSchemeIcon = document.querySelector('link#faviconLight');

function setFavicon() {
  if (matchMedia.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}

function watchFavicon() {
	setFavicon()
	matchMedia.addListener(setFavicon)
}

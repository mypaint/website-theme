export { watchLanguage }

const rootElem = document.documentElement
const translationsElem = document.querySelector('meta[property="translations"]')
const pageLang = rootElem.getAttribute("lang")
const langSelector = document.querySelector("#languageSelector")

let preferredLang = localStorage.getItem("preferredLang")
if (!preferredLang) {
	preferredLang = "en"
	localStorage.setItem("preferredLang", preferredLang)
}

//if (translationsElem) {
//	const availableLangs = translationsElem.content.split(',')
//	if (pageLang !== preferredLang &&
//		availableLangs.includes(preferredLang)) {
//		window.location = window.location.href.replace(`/${pageLang}/`, `/${preferredLang}/`)
//	}
//}

async function switchLang(langSelector) {
	const newLang = await langSelector.target.value
	localStorage.setItem("preferredLang", newLang)
	if (newLang !== pageLang) {
		window.location = window.location.href.replace(`/${pageLang}/`, `/${newLang}/`)
	}
}

function watchLanguage() {
	if (langSelector) {
		langSelector.addEventListener("input", switchLang)
	}
}

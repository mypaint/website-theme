import { switchTheme, watchFavicon } from "./theme.js"
import { toggleMenu } from "./reactiveDesign.js"
import { initialiseDetails, watchDetailState } from "./aside/details.js"
import { watchLanguage } from "./aside/lang.js"
import { watchHeadings } from "./aside/pageNav.js"

// Theme
const themeButton = document.querySelector("#themeButton")
if (themeButton) {
	themeButton.addEventListener('click', switchTheme)
}
watchFavicon()

// Hamburger menu
document.getElementById("headerNavMenu").addEventListener('click', toggleMenu)

// Aside details state
initialiseDetails()
const detailsList = document.querySelectorAll("aside nav > details")
for (const detail of detailsList) {
	detail.addEventListener("toggle", watchDetailState)
}
//setDetailsState();
//openDetailsChildren();

// Change language
watchLanguage()

// Highlight TOC
watchHeadings()

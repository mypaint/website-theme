import { switchTheme, watchFavicon } from "./theme.js"
import { toggleMenu } from "./reactiveDesign.js"
import { initialiseDetails, watchDetailsState } from "./aside/details.js"
import { watchLanguage } from "./aside/lang.js"
import { watchHeadings } from "./aside/pageNav.js"

// Theme
const themeButton = document.querySelector("#themeButton")
if (themeButton) {
	themeButton.addEventListener('click', switchTheme)
}
watchFavicon() // Matches browser UI theme, not website theme

// Hamburger menu
document.getElementById("headerNavMenu").addEventListener('click', toggleMenu)

// Aside navigation <details> state
initialiseDetails()
const detailsList = document.querySelectorAll("aside nav > details")
for (const details of detailsList) {
	details.addEventListener("toggle", watchDetailsState)
}

// Change language
watchLanguage()

// Highlight TOC
watchHeadings()

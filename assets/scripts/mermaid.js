import mermaid from "https://cdn.jsdelivr.net/npm/mermaid/+esm"

const rootElem = document.documentElement

let mermaidTheme = "base"
if (rootElem.classList.contains("darkTheme") ||
	rootElem.classList.contains("systemTheme") &&
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches) {
	mermaidTheme = "dark"
}

mermaid.initialize({
	startOnLoad: true,
	theme: mermaidTheme,
})

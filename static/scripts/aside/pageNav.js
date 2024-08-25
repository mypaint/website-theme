export { watchHeadings }

const article = document.querySelector("article")
const headings = article.querySelectorAll("h1, h2, h3, h4")
const pageNavDetails = document.querySelectorAll("#pageNav details")
const pageNavLinks = document.querySelectorAll("#pageNav a")

function detailSelector(detail) {
	const detailElem = detail.target || detail
	const detailLink = detailElem.querySelector("a")
	if ( detailElem.getAttribute("open") == null) {
		detailLink.classList.add("selected")
	} else {
		detailLink.classList.remove("selected")
	}
}

function setSelected(headingId) {
	for (const link of pageNavLinks) {
		link.classList.remove("selected")
	}
	for (const detail of pageNavDetails) {
		detail.removeEventListener("toggle", detailSelector)
	}
	if (headingId) {
		const pageNavLink = document.querySelector(`#pageNav a[href="#${headingId}"]`)
		const closestDetail = pageNavLink.closest("details")
		const closestDetailLink = closestDetail.querySelector("a")
		if (closestDetailLink !== pageNavLink) {
			closestDetail.addEventListener("toggle", detailSelector)
			detailSelector(closestDetail)
		}
		pageNavLink.classList.add("selected")
	}
}

function getIntersection(observed) {
	const hasSelected = () => {
		for (const pageNavLink of pageNavLinks) {
			if (pageNavLink.classList.contains("selected")) {
				return true
			}
		}
		return false
	}

	observed.map(i => {
		if (i.isIntersecting) {
			if (i.target.tagName === "H1" ) {
				setSelected()
			} else {
				setSelected(i.target.id)
			}
		} else if (hasSelected() && i.boundingClientRect.y > 0) {
			const headingIndex = Array.prototype.indexOf.call(headings, i.target)
			if (headingIndex >= 2) {
				setSelected(headings[headingIndex - 1].id)
			} else {
				setSelected()
			}
		}
	})
}

function watchHeadings() {
	if (pageNavLinks.length > 0) {
		for (const heading of headings) {
			new IntersectionObserver(getIntersection, {rootMargin: '0px 0px -95%'})
				.observe(heading)
		}
	}
}

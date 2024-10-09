export { initialiseDetails, watchDetailsState }

function setDetailsState() {
	const elems = document.querySelectorAll("aside nav")
	for (const elem of elems) {
		const id = elem.id
		const storageKey = `details-${id}` // TODO: It would be nicer to use KV pairs
		if (localStorage.getItem(storageKey) !== "closed") {
			document.querySelector(`#${id} > details`).setAttribute("open", "")
		}
	} 
}

function openDetailsChildren() {
	const elem = document.querySelector(`#pageNav a[href="${location.hash}"]`)
	if (elem) {
		elem.closest("details").setAttribute("open", "")
	}
}

function initialiseDetails() {
	setDetailsState()
	openDetailsChildren()
}

// "details" refers to the HTML tag <details>, it does not refer to multiple entities.
function watchDetailsState(details) {
	const detailsId = details.target.parentElement.id
	const detailsState = details.newState
	localStorage.setItem(`details-${detailsId}`, detailsState)
}

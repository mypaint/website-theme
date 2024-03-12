export { initialiseDetails, watchDetailState }

function setDetailsState() {
	const elems = document.querySelectorAll("aside nav")
	for (const elem of elems) {
		const id = elem.id
		const storageKey = `details-${id}`
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

function watchDetailState(asideDetails) {
	const detailsId = asideDetails.target.parentElement.id
	const detailsState = asideDetails.newState
	localStorage.setItem(`details-${detailsId}`, detailsState)
}

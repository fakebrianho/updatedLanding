async function getData(query) {
	const jsonFile = `${query}.json`
	const res = await fetch(jsonFile)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	const response = await res.json()
	return response
}

export default getData

async function getData(query) {
	const jsonFile = `/${query}.json`
	const res = await fetch(jsonFile)
	console.log(res)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	const response = await res.json()
	console.log(response)
	return response
}

export default getData

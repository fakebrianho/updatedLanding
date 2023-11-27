export default async function Page({ params }) {
	// const
	return null
}

export async function getTopLevel() {
	const routes = await getTopLevelRoutes()
	console.log(routes)
}

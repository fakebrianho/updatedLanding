import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
export default async function Page({ params }) {
	// const
	getTopLevel()
	return <h1>heello</h1>
}

export async function getTopLevel() {
	const routes = await getTopLevelRoutes()
	console.log(routes)
}

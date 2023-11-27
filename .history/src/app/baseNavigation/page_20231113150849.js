import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
export default async function Page({ params }) {
	// const
	getTopLevel()
	return null
}

export async function getTopLevel() {
	const routes = await getTopLevelRoutes()
	console.log(routes)
}

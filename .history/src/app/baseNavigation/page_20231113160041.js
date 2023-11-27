import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
export default async function Page({ params }) {
	// const
	let routes = await getTopLevel()
	return <h1>routes</h1>
}

export async function getTopLevel() {
	const routes = await getTopLevelRoutes()
	return routes
}

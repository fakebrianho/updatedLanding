import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
export default async function Page({ params }) {
	// const
	let routes = await getTopLevel()
	return <Navigation child_nodes={routes} title={'Uncertain Universe'} />
}

export async function getTopLevel() {
	const routes = await getTopLevelRoutes()
	console.log(routes)
	return routes
}

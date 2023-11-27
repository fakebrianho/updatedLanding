import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
import { Cursor } from '../../../components/Cursor/Cursor'
export default async function Page({ params }) {
	// const
	let routes = await getTopLevel()
	return (
		<>
			<Cursor />
			<Navigation
				child_nodes={routes}
				title={'Uncertain Universe'}
				topLevel={true}
			/>
		</>
	)
}

export async function getTopLevel() {
	const routes = await getTopLevelRoutes()
	return routes
}

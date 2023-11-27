// 'use client'
import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
import { PageProvider } from '../../context/pageContext'
export default async function Page({ params }) {
	// const
	let routes = await getTopLevel()
	return (
		<>
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

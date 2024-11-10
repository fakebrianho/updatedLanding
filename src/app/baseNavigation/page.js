// 'use client'
import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'

export default async function Page({ params }) {
	let routes = await getTopLevelRoutes()
	console.log('ruoutes', routes)
	return (
		<Navigation
			child_nodes={routes}
			title={'Uncertain Universe'}
			topLevel={true}
		/>
	)
}

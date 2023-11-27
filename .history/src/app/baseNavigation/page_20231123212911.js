// 'use client'
import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
export default async function Page({ params }) {
	// const
	let routes = await getTopLevel()
	return (
		<Navigation
			child_nodes={routes}
			title={'Uncertain Universe'}
			topLevel={true}
		/>
	)
}

export async function getTopLevel() {
	const routes = await getTopLevelRoutes()
	const itemsWithChildren = routes
		.filter((item) => item.hasChildren)
		.map((item) => {
			// Transform the item if needed, or return it directly
			return item
		})
	return itemsWithChildren
}

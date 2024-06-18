import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
import { getAllPostIds } from '../../../api/getAllPostIds'
export default async function Page() {
	let routes = await getTopLevelRoutes()
	let postIDS = await getAllPostIds()
	console.log(postIDS)
	// let allMarginalia = await fetch()
	return (
		<div>
			{routes.map((route, i) => {
				return <p key={i}>{route.name}</p>
			})}
		</div>
	)
}

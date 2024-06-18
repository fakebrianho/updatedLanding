import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'

export default async function Page() {
	let routes = await getTopLevelRoutes()
	// let allMarginalia = await fetch()
	return (
		<div>
			{routes.map((route, i) => {
				return <p key={i}>{route.name}</p>
			})}
		</div>
	)
}

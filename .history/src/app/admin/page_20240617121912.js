import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'

export default async function Page() {
	let routes = await getTopLevelRoutes()
	return (
		<div>
			{routes.map((route, i) => {
				return <p key={i}>{route}</p>
			})}
		</div>
	)
}

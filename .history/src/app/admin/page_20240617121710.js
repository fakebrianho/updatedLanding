import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'

export default async function Page() {
	let routes = await getTopLevelRoutes()
	console.log(routes)
	return <p>hi</p>
}

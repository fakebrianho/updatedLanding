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
			{postIDS.map((post, i) => {
				return <p key={i}>{post.params.chapter}</p>
			})}
		</div>
	)
}

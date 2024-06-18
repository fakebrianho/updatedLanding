import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
import { getAllPostIds } from '../../../api/getAllPostIds'
import { useState } from 'react'
export default async function Page() {
	const [marg, setMarg] = useState([])
	let posts = await getAllPostIds()

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

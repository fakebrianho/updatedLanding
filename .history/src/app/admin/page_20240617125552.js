import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
import { getAllPostIds } from '../../../api/getAllPostIds'
import { useEffect, useState } from 'react'
export default async function Page() {
	// const [marg, setMarg] = useState([])
	let posts = await getAllPostIds()
	let marginalia = await Promise.all(
		posts.map(async (post) => {
			const res = await fetch(`/api/${post.params.chapter}`)
			return res
		})
	)
	console.log(marginalia)
	// let allMarginalia = await fetch()

	return (
		<div>
			{/* {postIDS.map((post, i) => {
				return <p key={i}>{post.params.chapter}</p>
			})} */}
		</div>
	)
}

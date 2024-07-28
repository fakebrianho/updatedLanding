import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
import { getAllPostIds } from '../../../api/getAllPostIds'
export default async function Page() {
	let posts = await getAllPostIds()
	let marginalia = await Promise.all(
		posts.map(async (post) => {
			// console.log(post)
			// console.log(post.params.chapter)
			// const res = await fetch(`/api/${post.params.chapter}`)
			const res = await fetch('/api/first-principles', { method: 'GET' })
			const marginalia = await res.json()
			return marginalia
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

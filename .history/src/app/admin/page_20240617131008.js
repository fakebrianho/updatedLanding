import { getTopLevelRoutes } from '../../../api/getTopLevelRoutes'
import { Navigation } from '../../../components/Navigation/Navigation'
import { getAllPostIds } from '../../../api/getAllPostIds'
import { Admin } from '../../../components/Admin/Admin'
export default function Page() {
	// let posts = await getAllPostIds()
	// let marginalia = await Promise.all(
	// 	posts.map(async (post) => {
	// 		// console.log(post)
	// 		// console.log(post.params.chapter)
	// 		// const res = await fetch(`/api/${post.params.chapter}`)
	// 		const res = await fetch('/api/first-principles', { method: 'GET' })
	// 		const marginalia = await res.json()
	// 		return marginalia
	// 	})
	// )
	const fetchData = async () => {
		try {
			const response = await fetch(`/api/first-principles`, {
				method: 'GET',
			})
			const marg = await response.json()
			console.log(marg)
		} catch (e) {
			console.log(e)
		}
	}
	// let allMarginalia = await fetch()

	return <Admin />
}

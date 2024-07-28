export default async function Page({ marginalia }) {
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
	// const fetchData = async () => {
	// 	try {
	// 		const response = await fetch(`/api/first-principles`, {
	// 			method: 'GET',
	// 		})
	// 		const marg = await response.json()
	// 		console.log(marg)
	// 	} catch (e) {
	// 		console.log(e)
	// 	}
	// }
	// let allMarginalia = await fetch()
	try {
		const res = await fetch('http://localhost:3000/api/first-principles', {
			method: 'GET',
		})
		const marginalia = await res.json()

		return (
			<div>
				{marginalia.map((entry, i) => (
					<p key={i}>{entry}</p>
				))}
			</div>
		)
	} catch (error) {
		console.error(error)
		return <div>Error: {error.message}</div>
	}
}

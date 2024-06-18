import { getAllPostIds } from '../../../api/getAllPostIds'
export default async function Page({ marginalia }) {
	let posts = await getAllPostIds()
	let m = await Promise.all(
		posts.map(async (post) => {
			// console.log(post)
			// console.log(post.params.chapter)
			// const res = await fetch(`/api/${post.params.chapter}`)
			// const res = await fetch(
			// 	'https://localhost:3000/api/first-principles',
			// 	{
			// 		method: 'GET',
			// 	}
			// )
			const res = await fetch(
				`http://localhost:3000/api/${post.params.chapter}`,
				{
					method: 'GET',
				}
			)
			const marg = await res.json()
			// console.log(marg)
			return marg
		})
	)
	const cleanedArray = m.filter(
		(entry) =>
			entry !== null &&
			entry !== undefined &&
			(typeof entry !== 'object' || Object.keys(entry).length > 0)
	)
	console.log(cleanedArray[0])
	return (
		<>
			{cleanedArray.map((entry, i) => {
				return <p key={i}>{entry[0].name}</p>
			})}
		</>
	)
}

// 'use client'
import { getAllPostIds } from '../../../api/getAllPostIds'
// import Marginalia from '../../../components/Marginalia/Marginalia'
const renderElements = (entry) => {
	if (Array.isArray(entry)) {
		return entry.map((item, index) => renderElements(item, index))
	} else if (typeof entry === 'object' && entry !== null) {
		// return <p key={entry.id}>{entry.name}</p>
		return (
			<Marginalia
				key={i}
				username={entry.name}
				content={entry.body}
				picture={entry.picture}
			/>
		)
	} else {
		return null
	}
}

export default async function Page({ marginalia }) {
	let posts = await getAllPostIds()
	let m = await Promise.all(
		posts.map(async (post) => {
			const res = await fetch(
				`http://localhost:3000/api/${post.params.chapter}`,
				{
					method: 'GET',
				}
			)
			const marg = await res.json()
			return marg
		})
	)
	const cleanedArray = m.filter(
		(entry) =>
			entry !== null &&
			entry !== undefined &&
			(typeof entry !== 'object' || Object.keys(entry).length > 0)
	)
	return <>{cleanedArray.map(renderElements)}</>
}

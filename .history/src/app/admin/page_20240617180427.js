// import { getAllPostIds } from '../../../api/getAllPostIds'
// import MarginaliaRender from '../marginaliaRender/marginaliaRender'
// import styles from './admin.module.css'

// const renderElements = (entry) => {
// 	if (Array.isArray(entry)) {
// 		return entry.map((item, index) => renderElements(item, index))
// 	} else if (typeof entry === 'object' && entry !== null) {
// 		// return <p key={entry.id}>{entry.name}</p>
// 		return (
// 			<div id={entry.id} className={styles.gridItem}>
// 				<MarginaliaRender
// 					username={entry.name}
// 					content={entry.body}
// 					picture={entry.picture}
// 				/>
// 			</div>
// 		)
// 	} else {
// 		return null
// 	}
// }

// export default async function Page({ marginalia }) {
// 	let posts = await getAllPostIds()
// 	let m = await Promise.all(
// 		posts.map(async (post) => {
// 			const res = await fetch(
// 				`http://localhost:3000/api/${post.params.chapter}`,
// 				{
// 					method: 'GET',
// 				}
// 			)
// 			const marg = await res.json()
// 			return marg
// 		})
// 	)
// 	const cleanedArray = m.filter(
// 		(entry) =>
// 			entry !== null &&
// 			entry !== undefined &&
// 			(typeof entry !== 'object' || Object.keys(entry).length > 0)
// 	)
// 	return (
// 		<>
// 			<div className={styles.container}>
// 				{cleanedArray.map(renderElements)}
// 			</div>
// 		</>
// 	)
// }
// app/admin/page.js
import { getAllPostIds } from '../../../api/getAllPostIds'
import MarginaliaRender from '../marginaliaRender/marginaliaRender'
import styles from './admin.module.css'

const renderElements = (entry) => {
	if (Array.isArray(entry)) {
		return entry.map((item, index) => renderElements(item, index))
	} else if (typeof entry === 'object' && entry !== null) {
		return (
			<div key={entry.id} className={styles.gridItem}>
				<MarginaliaRender
					username={entry.name}
					content={entry.body}
					picture={entry.picture}
				/>
			</div>
		)
	} else {
		return null
	}
}

export default async function Page() {
	let posts = await getAllPostIds()
	let m = await Promise.all(
		posts.map(async (post) => {
			const res = await fetch(
				// `http://www.uncertain-universe.com/api/${post.params.chapter}`,
				`http://localhost:3000/api/${post.params.chapter}`,
				{
					method: 'GET',
				}
			)
			console.log(res)
			// const marg = await res.json()
			return res
		})
	)

	const cleanedArray = m.filter(
		(entry) =>
			entry !== null &&
			entry !== undefined &&
			(typeof entry !== 'object' || Object.keys(entry).length > 0)
	)

	return (
		<div className={styles.container}>
			{cleanedArray.map(renderElements)}
		</div>
	)
}

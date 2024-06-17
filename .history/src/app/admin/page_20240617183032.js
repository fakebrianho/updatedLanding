import { getAllPostIds } from '../../../api/getAllPostIds'
import MarginaliaRender from '../marginaliaRender/marginaliaRender'
import styles from './admin.module.css'
import { BASE_API_URL } from '../../utils/constants'

const renderElements = (entry) => {
	console.log(BASE_API_URL)
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
	console.log(`${BASE_API_URL}/api/first-principles`)
	let m = await Promise.all(
		posts.map(async (post) => {
			const res = await fetch(
				`${BASE_API_URL}/api/${post.params.chapter}`,
				// 'https://localhost:3000/api/first-principles',
				// `http://localhost:3000/api/${post.params.chapter}`,
				{
					method: 'GET',
				}
			)
			console.log(res)
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

	return (
		<div className={styles.container}>
			{cleanedArray.map(renderElements)}
		</div>
	)
}

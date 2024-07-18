import { getAllPostIds } from '../../../api/getAllPostIds'
import MarginaliaRender from '../marginaliaRender/marginaliaRender'
import styles from './admin.module.css'
import { BASE_API_URL } from '../../utils/constants'

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
	// console.log('BASE', process.env.NEXT_PUBLIC_BASE_API_URL)

	if (!BASE_API_URL) {
		return null
	}
	let posts = await getAllPostIds()
	let m = await Promise.all(
		posts.map(async (post) => {
			try {
				const res = await fetch(
					`http://${BASE_API_URL}/api/${post.params.chapter}`,
					// `https://updated-landing-8qz6bn6dq-fakebrianhos-projects.vercel.app/api/${post.params.chapter}`,
					{
						method: 'GET',
					}
				)
				console.log(res)
				// const marg = await res.json()
				// return marg
			} catch (e) {
				console.log(e)
				return null
			}
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

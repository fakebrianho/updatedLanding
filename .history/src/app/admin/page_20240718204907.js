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
const deleteMarginalia = async (id) => {
	try {
		const response = await fetch(`/api/marginalia/${fileName}/${id}`, {
			method: 'DELETE',
		})

		if (response.ok) {
			// Updates the marginalia front end component
			setmMarg(mMarg.filter((item) => item._id !== id))
		} else {
			console.error('Failed to delete marginalia:', response.statusText)
		}
	} catch (error) {
		console.error('Error deleting marginalia:', error)
	}
}

export default async function Page() {
	if (!BASE_API_URL) {
		return null
	}
	let posts = await getAllPostIds()
	let m = await Promise.all(
		posts.map(async (post) => {
			const res = await fetch(
				`http://${BASE_API_URL}/api/${post.params.chapter}`,
				{
					method: 'GET',
				}
			)
			const result = await res.json()
			return result // returning the entire response object
		})
	)
	const cleanedArray = m
		.filter((entry) => entry !== null && entry !== undefined)
		.map((entry) => entry.marg) // Extract the 'marg' property from each object
		.flat()
		.filter(
			(entry) =>
				entry !== null &&
				entry !== undefined &&
				(typeof entry !== 'object' || Object.keys(entry).length > 0)
		)
	// const cleanedArray = m.filter(
	// 	(entry) =>
	// 		entry !== null &&
	// 		entry !== undefined &&
	// 		(typeof entry !== 'object' || Object.keys(entry).length > 0)
	// )
	// console.log(cleanedArray)

	return (
		<div className={styles.container}>
			{typeof m}
			{/* {cleanedArray.map(renderElements)} */}
		</div>
	)
}

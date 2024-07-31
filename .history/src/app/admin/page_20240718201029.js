// import { getAllPostIds } from '../../../api/getAllPostIds'
// import MarginaliaRender from '../marginaliaRender/marginaliaRender'
// import styles from './admin.module.css'
// import { BASE_API_URL } from '../../utils/constants'

// const renderElements = (entry) => {
// 	if (Array.isArray(entry)) {
// 		return entry.map((item, index) => renderElements(item, index))
// 	} else if (typeof entry === 'object' && entry !== null) {
// 		return (
// 			<div key={entry.id} className={styles.gridItem}>
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
// const renderElements = (entry) => {
// 	if (Array.isArray(entry)) {
// 		return entry.map((item, index) => renderElements(item, index))
// 	} else if (typeof entry === 'object' && entry !== null) {
// 		return (
// 			<div key={entry.id} className={styles.gridItem}>
// 				<MarginaliaRender
// 					username={entry.name}
// 					content={entry.body}
// 					picture={entry.picture}
// 					// id={entry.id}
// 				/>
// 			</div>
// 		)
// 	} else {
// 		return null
// 	}
// }
// const deleteMarginalia = async (id) => {
// 	try {
// 		const response = await fetch(`/api/marginalia/${fileName}/${id}`, {
// 			method: 'DELETE',
// 		})

// 		if (response.ok) {
// 			// Updates the marginalia front end component
// 			setmMarg(mMarg.filter((item) => item._id !== id))
// 		} else {
// 			console.error('Failed to delete marginalia:', response.statusText)
// 		}
// 	} catch (error) {
// 		console.error('Error deleting marginalia:', error)
// 	}
// }

// export default async function Page() {
// 	if (!BASE_API_URL) {
// 		return null
// 	}
// 	let posts = await getAllPostIds()
// 	let m = await Promise.all(
// 		posts.map(async (post) => {
// 			const res = await fetch(
// 				`http://${BASE_API_URL}/api/${post.params.chapter}`,
// 				// `http://localhost:3000/api/${post.params.chapter}`,
// 				{
// 					method: 'GET',
// 				}
// 			)
// 			const marg = await res.json()
// 			return marg
// 		})
// 	)
// let m = await Promise.all(
// 	posts.map(async (post) => {
// 		try {
// 			const res = await fetch(
// 				`http://${BASE_API_URL}/api/${post.params.chapter}`,
// 				{
// 					method: 'GET',
// 				}
// 			)
// 			if (!res.ok) {
// 				throw new Error(`HTTP error! status: ${res.status}`)
// 			}
// 			const data = await res.json()
// 			return data
// 		} catch (error) {
// 			console.error('Fetch error:', error)
// 			return null
// 		}
// 	})
// )

// const cleanedArray = m.filter(
// 	(entry) =>
// 		entry !== null &&
// 		entry !== undefined &&
// 		(typeof entry !== 'object' || Object.keys(entry).length > 0)
// )

// const cleanedArray = m
// 	.filter(
// 		(entry) =>
// 			entry &&
// 			typeof entry === 'object' &&
// 			Object.keys(entry).length > 0
// 	)
// 	.map((entry) => entry.marginalia)
// 	.flat()
// 	.filter(
// 		(entry) =>
// 			entry &&
// 			typeof entry === 'object' &&
// 			Object.keys(entry).length > 0
// 	)
// 	const NestedDivs = ({ data }) => {
// 		console.log('NestedDivs data:', data)
// 		const createDivsFromObject = (obj) => {
// 			const createDivsHelper = (currentObj) => {
// 				return Object.keys(currentObj).map((key) => {
// 					const value = currentObj[key]
// 					if (typeof value === 'object' && value !== null) {
// 						return (
// 							<div key={key}>
// 								{key}:{createDivsHelper(value)}
// 							</div>
// 						)
// 					} else {
// 						return (
// 							<div key={key}>
// 								{key}: {value}
// 							</div>
// 						)
// 					}
// 				})
// 			}

// 			return createDivsHelper(obj)
// 		}

// 		return <div>{createDivsFromObject(data)}</div>
// 	}

// 	return (
// 		<div className={styles.container}>
// 			{cleanedArray.map(renderElements)}
// 			{/* <div>lmofoasdofoasdfo</div> */}
// 			{/* {createDivsFromObject(cleanedArray)} */}
// 			{/* <NestedDivs data={cleanedArray} /> */}
// 			{/* <div>{cleaned}</div> */}
// 			{/* <NestedDivs data={cleanedArray} /> */}

// 			{/* {cleanedArray.map((item) => {
// 				return <div key={item.id}>{item}</div>
// 			})} */}
// 		</div>
// 	)
// }

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
				// `http://localhost:3000/api/${post.params.chapter}`,
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
	console.log(cleanedArray)

	return (
		<div className={styles.container}>
			{cleanedArray.map(renderElements)}
		</div>
	)
}

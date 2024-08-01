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
// 				{
// 					method: 'GET',
// 				}
// 			)
// 			const result = await res.json()
// 			return result // returning the entire response object
// 		})
// 	)
// 	const cleanedArray = m
// 		.filter((entry) => entry !== null && entry !== undefined)
// 		.map((entry) => entry.marg) // Extract the 'marg' property from each object
// 		.flat()
// 		.filter(
// 			(entry) =>
// 				entry !== null &&
// 				entry !== undefined &&
// 				(typeof entry !== 'object' || Object.keys(entry).length > 0)
// 		)
// 	// const cleanedArray = m.filter(
// 	// 	(entry) =>
// 	// 		entry !== null &&
// 	// 		entry !== undefined &&
// 	// 		(typeof entry !== 'object' || Object.keys(entry).length > 0)
// 	// )
// 	// console.log(cleanedArray)

// 	return (
// 		<div className={styles.container}>
// 			{/* {typeof m} */}
// 			{cleanedArray.map(renderElements)}
// 		</div>
// 	)
// }
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
// 				{
// 					method: 'GET',
// 				}
// 			)
// 			const result = await res.json()
// 			return result // returning the entire response object
// 		})
// 	)

// 	// Ensure m contains the expected structure
// 	const cleanedArray = m
// 		.filter((entry) => entry && entry.marg) // Ensure each entry has the 'marg' property
// 		.map((entry) => entry.marg) // Extract the 'marg' property from each object
// 		.flat()
// 		.filter(
// 			(entry) =>
// 				entry &&
// 				typeof entry === 'object' &&
// 				Object.keys(entry).length > 0
// 		)

// 	// Ensure cleanedArray has valid data to render
// 	if (cleanedArray.length === 0) {
// 		return <div className={styles.container}>No marginalia found.</div>
// 	}

// 	return (
// 		<div className={styles.container}>
// 			{cleanedArray.map(renderElements)}
// 		</div>
// 	)
// }
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
// 				{
// 					method: 'GET',
// 				}
// 			)
// 			const result = await res.json()
// 			return result // returning the entire response object
// 		})
// 	)

// 	// Log the entire m to see the structure
// 	console.log('Fetched data:', m)

// 	const cleanedArray = m
// 		.filter((entry) => entry && entry.marg) // Ensure each entry has the 'marg' property
// 		.map((entry) => entry.marg) // Extract the 'marg' property from each object
// 		.flat()
// 		.filter(
// 			(entry) =>
// 				entry &&
// 				typeof entry === 'object' &&
// 				Object.keys(entry).length > 0
// 		)

// 	// Log the cleaned array to debug
// 	console.log('Cleaned array:', cleanedArray)

// 	// Ensure cleanedArray has valid data to render
// 	if (cleanedArray.length === 0) {
// 		return <div className={styles.container}>No marginalia found.</div>
// 	}

// 	return (
// 		<div className={styles.container}>
// 			{cleanedArray.map(renderElements)}
// 		</div>
// 	)
// }
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
// 				{
// 					method: 'GET',
// 				}
// 			)
// 			const result = await res.json()
// 			console.log('Response for post:', post.params.chapter, result)
// 			return result // returning the entire response object
// 		})
// 	)

// 	// Simplified check for testing
// 	const cleanedArray = m
// 		.filter((entry) => entry && entry.marg) // Ensure each entry has the 'marg' property
// 		.map((entry) => entry.marg) // Extract the 'marg' property from each object
// 		.flat()
// 		.filter(
// 			(entry) =>
// 				entry &&
// 				typeof entry === 'object' &&
// 				Object.keys(entry).length > 0
// 		)

// 	// Ensure cleanedArray has valid data to render
// 	if (cleanedArray.length === 0) {
// 		return <div className={styles.container}>No marginalia found.</div>
// 	}

// 	return (
// 		<div className={styles.container}>
// 			{cleanedArray.map(renderElements)}
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
			try {
				const res = await fetch(
					// `http://${BASE_API_URL}/api/${post.params.chapter}`,
					`http://localhost:3000/api/marginalia/${post.params.chapter}`,

					{
						method: 'GET',
						headers: {
							'Cache-Control': 'no-store', // Add this header
						},
					}
				)
				if (!res.ok) {
					throw new Error(
						`Error fetching data for ${post.params.chapter}: ${res.status}`
					)
				}
				const result = await res.json()
				// console.log(result.file_name)
				return result // returning the entire response object
			} catch (error) {
				console.error(
					`Failed to fetch data for post ${post.params.chapter}:`,
					error
				)
				return { error: error.toString() }
			}
		})
	)

	// console.log(m)
	// console.log(typeof m)
	// Simplified check for testing
	const cleanedArray = m
		.filter((entry) => entry && entry.marg) // Ensure each entry has the 'marg' property
		.flatMap((entry) =>
			entry.marg.map((marg) => ({
				...marg,
				file_name: entry.file_name,
			}))
		)
		.filter(
			(entry) =>
				entry &&
				typeof entry === 'object' &&
				Object.keys(entry).length > 0
		)
	console.log('asdfa', cleanedArray)
	if (cleanedArray.length === 0) {
		return <div className={styles.container}>No marginalia found.</div>
	}

	return (
		<div className={styles.container}>
			{cleanedArray.map(renderElements)}
		</div>
	)
}

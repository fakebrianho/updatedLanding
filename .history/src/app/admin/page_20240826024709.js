import { getAllPostIds } from '../../../api/getAllPostIds'
import MarginaliaRender from '../../../components/MarginaliaRender/MarginaliaRender'
import LoginPanel from '../../../components/LoginPanel/LoginPanel'
import styles from './admin.module.css'
import { BASE_API_URL } from '../../utils/constants'

const mapMarginalia = (entry) => {
	if (Array.isArray(entry.marg)) {
		return entry.marg.map((item, index) => (
			<div key={index} className={styles.gridItem}>
				<MarginaliaRender
					key={index}
					id={item._id}
					username={item.name}
					content={item.body}
					picture={item.picture}
					fileName={entry.file_name} // Pass the file name
				/>
			</div>
		))
	} else {
		return null
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
					`http://localhost:3000/api/marginalia/${post.params.chapter}`,
					// `http://${BASE_API_URL}/api/marginalia/${post.params.chapter}`,
					{
						method: 'GET',
						cache: 'no-store',
						headers: {
							'Cache-Control': 'no-store', // Add this header
						},
					}
				)
				if (!res.ok) {
					throw new Error(
						`Error fetching data for ${post.params.chapter}: ${res.status} url is: ${BASE_API_URL}`
					)
				}
				const result = await res.json()
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

	const cleanedArray = m.filter(
		(item) => item !== null && !(Array.isArray(item) && item.length === 0)
	)
	const filteredData = m.filter((item) => {
		return item.marg && item.marg.length > 0
	})

	if (cleanedArray.length === 0) {
		return <div className={styles.container}>No marginalia found.</div>
	}

	return (
		<div className={styles.container}>
			<LoginPanel data={filteredData} />
			{/* {filteredData.map((item, index) => mapMarginalia(item))} */}
		</div>
	)
}

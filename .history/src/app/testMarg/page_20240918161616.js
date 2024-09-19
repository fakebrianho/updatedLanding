import { getAllPostIds } from '../../../api/getAllPostIds'
import LoginPanel from '../../../components/LoginPanel/LoginPanel'
// import styles from './admin.module.css'
import { BASE_API_URL } from '../../utils/constants'
export default async function Page({ params }) {
	if (!BASE_API_URL) {
		return null
	}
	let posts = await getAllPostIds()
	console.log(posts)
	return <>hi</>
}

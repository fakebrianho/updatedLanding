import { getAllPostIds } from '../../../api/getAllPostIds'
import { getDataContent } from '../../../api/getDataContent'
import ReadPage from '../../../components/ReadingPage/ReadingPage'
export default function Chapter({ post }) {
	return <ReadPage post={post} />
}

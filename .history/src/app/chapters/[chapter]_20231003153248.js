import { getAllPostIds } from '../../../api/getAllPostIds'
import { getDataContent } from '../../../api/getDataContent'

export default function Chapter({ post }) {
	return <ReadPage post={post} />
}

import { getAllPostIds } from '../../../api/getAllPostIds'
import { getDataContent } from '../../../api/getDataContent'
import ReadPage from '../../../components/ReadingPage/ReadingPage'
export default function Chapter({ post }) {
	return <ReadPage post={post} />
}
export async function getStaticProps({ params }) {
	const postData = await getDataContent(params.chapter)
	if (!postData || postData.length === 0) {
		return { notFound: true }
	}
	const post = postData[0]
	if (post._id) {
		post._id = post._id.toString()
	}

	// Convert _id of every child in child_nodes
	if (post.child_nodes && post.child_nodes.length) {
		post.child_nodes = post.child_nodes.map((child) => {
			if (child._id) {
				child._id = child._id.toString()
			}
			return child
		})
	}
	return {
		props: {
			post,
		},
	}
}
export async function getStaticPaths() {
	const paths = await getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'

export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	console.log('params', chapter)
	// console.log('posts', post[0].child_nodes)
	if (post && post.length > 0) {
		const serializedNodes = post[0].child_nodes.map((node) => {
			node._id = JSON.parse(JSON.stringify(node._id))
			// console.log('serial', serializedNodes)
			return node
		})
		return (
			<Navigation
				child_nodes={serializedNodes}
				title={chapter}
				topLevel={false}
			/>
		)
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	// console.log('my paths', paths)
	return paths.map((path) => path.params.chapter)
}

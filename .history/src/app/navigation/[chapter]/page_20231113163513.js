import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'
export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	if (post && post.length > 0) {
		const serializedNodes = post[0].child_nodes.map((node) => {
			node._id = JSON.parse(JSON.stringify(node._id))
			return node
		})
		console.log(serializedNodes)
		return <Navigation child_nodes={serializedNodes} title={chapter} />
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

'use client'
import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'
import { PageProvider } from '../../../../context/pageContext'

export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	if (post && post.length > 0) {
		const serializedNodes = post[0].child_nodes.map((node) => {
			node._id = JSON.parse(JSON.stringify(node._id))
			return node
		})
		return (
			<PageProvider>
				<Navigation child_nodes={serializedNodes} title={chapter} />
			</PageProvider>
		)
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

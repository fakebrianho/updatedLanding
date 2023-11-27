import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'
import dynamic from 'next/dynamic'
// import { PageProvider } from '../../../../context/pageContext'
const PageProviderSSR = dynamic(
	() => import('../../../../context/pageContext'),
	{
		ssr: false,
	}
)

export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	if (post && post.length > 0) {
		const serializedNodes = post[0].child_nodes.map((node) => {
			node._id = JSON.parse(JSON.stringify(node._id))
			return node
		})
		return (
			<PageProviderSSR>
				<Navigation child_nodes={serializedNodes} title={chapter} />
			</PageProviderSSR>
		)
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'
export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	if (post && post.length > 0) {
		console.log(post)
		return <Navigation child_nodes={post[0].child_nodes} title={chapter} />
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

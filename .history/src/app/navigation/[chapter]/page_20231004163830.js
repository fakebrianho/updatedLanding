import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'
export default async function Page({ params }) {
	const chapter = params.chapter
	console.log(typeof chapter)
	const post = await getDataContent(chapter)
	console.log(post[0].child_nodes)
	if (post && post.length > 0) {
		return <Navigation title={chapter} />
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

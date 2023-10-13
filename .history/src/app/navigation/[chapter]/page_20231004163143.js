import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import Nav from './Nav'

export default async function Page({ params }) {
	const chapter = params.chapter
	console.log(chapter)
	const post = await getDataContent(chapter)
	console.log(post[0].child_nodes)
	if (post && post.length > 0) {
		return <Nav title={chapter} />
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

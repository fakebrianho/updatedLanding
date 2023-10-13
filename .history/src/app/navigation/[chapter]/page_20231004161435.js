import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	console.log(post)
	if (post && post.length > 0) {
		return <h1>hi</h1>
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

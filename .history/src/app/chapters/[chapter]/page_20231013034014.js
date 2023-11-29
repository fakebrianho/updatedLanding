import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import ReadingPage from '../../../../components/ReadingPage/ReadingPage'

export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	if (post && post.length > 0) {
		return <ReadingPage post={post[0]} />
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	console.log(paths)
	return paths.map((path) => path.params.chapter)
}

import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import ReadingPage from '../../../../components/ReadingPage/ReadingPage'
import { NavigationBar } from '../../../../components/NavigationBar'

export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	if (post && post.length > 0) {
		return (
			<>
				<NavigationBar color={'black'} sub={false} />
				<ReadingPage post={post[0]} />
			</>
		)
		return <ReadingPage post={post[0]} />
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

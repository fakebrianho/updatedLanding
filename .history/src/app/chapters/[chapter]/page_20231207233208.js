'use client'
import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import ReadingPage from '../../../../components/ReadingPage/ReadingPage'
import { PageProvider } from '../../../../context/pageContext'
import { NavigationBar } from '../../../../components/NavigationBar'
export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	if (post && post.length > 0) {
		return (
			<PageProvider>
				<ReadingPage post={post[0]} />
			</PageProvider>
		)
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import ReadingPage from '../../../../components/ReadingPage/ReadingPage'
export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	console.log(post[0])
	return <ReadingPage post={post[0]} />
}

export async function generateStaticParams() {
	// console.log('working at all? ')
	const paths = await getAllPostIds()
	// console.log('returned paths:', paths)
	// Assuming paths is an array of objects like [{ id: '1' }, { id: '2' }, ...]
	// return paths.map((path) => ({ chapter: path.id }))
	// return [{ chapter: 'testChapter' }]
	return paths.map((path) => path.params.chapter)
}

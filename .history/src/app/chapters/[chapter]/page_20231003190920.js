import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import ReadingPage from '../../../../components/ReadingPage/ReadingPage'
export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
	return <ReadingPage post={post} />
}

// export async function getStaticProps(context) {
// 	console.log('static props')
// 	const { chapter } = context.params
// 	if (chapter === 'testChapter') {
// 		return {
// 			props: {
// 				post: {
// 					title: 'Test Chapter Title',
// 				},
// 			},
// 		}
// 	}
// 	const postData = await getDataContent(chapter)
// 	console.log(postData)
// 	return {
// 		props: {
// 			post: postData,
// 		},
// 	}
// }

export async function generateStaticParams() {
	// console.log('working at all? ')
	const paths = await getAllPostIds()
	// console.log('returned paths:', paths)
	// Assuming paths is an array of objects like [{ id: '1' }, { id: '2' }, ...]
	// return paths.map((path) => ({ chapter: path.id }))
	// return [{ chapter: 'testChapter' }]
	return paths.map((path) => path.params.chapter)
}
// export async function generateStaticParams() {
// 	console.log('working atall? ')
// 	const paths = await getAllPostIds()
// 	console.log('returned paths:', paths)
// 	// return { paths, fallback: false }
// 	return {
// 		paths: [{ chapter: 'testChapter' }],
// 		fallback: false,
// 	}
// }

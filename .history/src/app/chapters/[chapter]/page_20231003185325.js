import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
export default async function Page({ params }) {
	console.log(params)
	const chapter = params.chapter
	console.log(typeofchapter)
	let post
	if (chapter === 'testChapter') {
		post = { title: 'Test Chapter Title' }
	} else {
		post = await getDataContent(chapter)
	}
	console.log(post)
	return <h1>{post.title}</h1>
	return <h1>{post.title}</h1>
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
	console.log('working at all? ')
	const paths = await getAllPostIds()
	console.log('returned paths:', paths)
	// Assuming paths is an array of objects like [{ id: '1' }, { id: '2' }, ...]
	// return paths.map((path) => ({ chapter: path.id }))
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

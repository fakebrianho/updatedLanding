import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
export default async function Page({ post }) {
	return <h1>{post.title}</h1>
}

export async function generateStaticProps(context) {
	const { chapter } = context.params
	if (chapter === 'testChapter') {
		return {
			props: {
				post: {
					title: 'Test Chapter Title',
				},
			},
		}
	}
	const postData = await getDataContent(chapter)
	console.log(postData)
	return {
		props: {
			post: postData,
		},
	}
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	console.log('returned paths:', paths)
	// return { paths, fallback: false }
	return {
		paths: [{ params: { chapter: 'testChapter' } }],
		fallback: false,
	}
}

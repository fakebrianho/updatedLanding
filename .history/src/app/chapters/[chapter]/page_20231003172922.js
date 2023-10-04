// import { getAllPostIds } from '../../api/getAllPostIds'
// import { getDataContent } from '../../api/getDataContent'

import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
export default async function Page({ post }) {
	return <h1>{post.title}</h1>
}

export async function generateStaticProps(context) {
	const { chapter } = context.params
	const postData = await getDataContent(chapter)
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

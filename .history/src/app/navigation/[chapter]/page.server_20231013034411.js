// File: ./src/app/navigation/[chapter]/page.server.js
import { useServerFetch } from 'next/server'
import { getDataContent } from '../../../../api/getDataContent'

function Page({ chapter }) {
	const post = useServerFetch(getDataContent, chapter)
	console.log(post)
	if (!post || post.length === 0) {
		throw new Error('Post not found')
	}

	const serializedNodes = post[0].child_nodes.map((node) => {
		node._id = JSON.parse(JSON.stringify(node._id))
		return node
	})

	return { child_nodes: serializedNodes, title: chapter }
}

export default Page

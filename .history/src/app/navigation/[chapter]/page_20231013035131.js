// import { getAllPostIds } from '../../../../api/getAllPostIds'
// import { getDataContent } from '../../../../api/getDataContent'
// import { Navigation } from '../../../../components/Navigation/Navigation'
// export default async function Page({ params }) {
// 	const chapter = params.chapter
// 	const post = await getDataContent(chapter)
// 	if (post && post.length > 0) {
// 		const serializedNodes = post[0].child_nodes.map((node) => {
// 			node._id = JSON.parse(JSON.stringify(node._id))
// 			return node
// 		})

// 		return <Navigation child_nodes={serializedNodes} title={chapter} />
// 	}
// }

// export async function generateStaticParams() {
// 	const paths = await getAllPostIds()
// 	return paths.map((path) => path.params.chapter)
// }

// Imports remain the same
import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'

// Your default export is now a synchronous function, as it should be for a React component.
export default function Page({ childNodes, chapter, error }) {
	// If there was an error during data fetch, display it
	if (error) {
		return <div>Error: {error.message}</div>
	}

	// If data was fetched successfully, display your navigation component
	return <Navigation child_nodes={childNodes} title={chapter} />
}

// This function fetches data on the server-side before rendering the page
export async function getServerSideProps(context) {
	try {
		const chapter = context.params.chapter
		const post = await getDataContent(chapter)

		if (!post || post.length === 0) {
			throw new Error('No post found for this chapter.')
		}

		const serializedNodes = post[0].child_nodes.map((node) => {
			node._id = JSON.parse(JSON.stringify(node._id))
			return node
		})

		// If everything was successful, pass the data as props to your page component
		return { props: { childNodes: serializedNodes, chapter } }
	} catch (error) {
		// If there was an error, pass the error object as a prop to your page component
		return { props: { error: { message: error.message } } }
	}
}

// Your generateStaticParams function doesn't fit into the Next.js data fetching model,
// but you might be using it for a custom setup. We can add error handling here as well.
export async function generateStaticParams() {
	try {
		const paths = await getAllPostIds()
		return paths.map((path) => path.params.chapter)
	} catch (error) {
		console.error('Error generating static params:', error)
		// Handle the error appropriately depending on your app's behavior
		return []
	}
}

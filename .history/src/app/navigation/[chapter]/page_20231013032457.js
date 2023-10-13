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
// 	console.log(paths)
// 	return paths.map((path) => path.params.chapter)
// }
import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
import { Navigation } from '../../../../components/Navigation/Navigation'

// This is your page component
function Page({ child_nodes, title }) {
	// Render your component based on fetched data
	return <Navigation child_nodes={child_nodes} title={title} />
}

// This function gets called at request time for server-side rendering
export async function getServerSideProps(context) {
	const { params } = context
	const chapter = params.chapter

	const post = await getDataContent(chapter)

	if (!post || post.length === 0) {
		// Return a 404 status if no post is found
		return { notFound: true }
	}

	const serializedNodes = post[0].child_nodes.map((node) => {
		node._id = JSON.parse(JSON.stringify(node._id))
		return node
	})

	// Pass data to the page via props
	return { props: { child_nodes: serializedNodes, title: chapter } }
}

// This function gets called at build time for static generation
export async function getStaticPaths() {
	const paths = await getAllPostIds()

	// Map the paths to the format required by Next.js
	const formattedPaths = paths.map((path) => ({
		params: { chapter: path.params.chapter },
	}))

	// You must return these properties from getStaticPaths
	return {
		paths: formattedPaths,
		fallback: false, // or 'blocking', or 'true', depending on your needs
	}
}

export default Page // Don't forget to export your component!

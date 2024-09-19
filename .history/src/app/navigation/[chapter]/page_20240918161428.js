export default async function Page({ params }) {
	return (
		<Navigation
			child_nodes={serializedNodes}
			title={chapter}
			topLevel={false}
		/>
	)
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

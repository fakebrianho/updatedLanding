export default async function Page({ params }) {
	return <div>hi</div>
}

export async function generateStaticParams() {
	const paths = await getAllPostIds()
	return paths.map((path) => path.params.chapter)
}

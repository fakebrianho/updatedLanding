import { getAllPostIds } from '../../../../api/getAllPostIds'
import { getDataContent } from '../../../../api/getDataContent'
export default async function Page({ params }) {
	const chapter = params.chapter
	const post = await getDataContent(chapter)
}

export async function getTopLevelRoutes() {
	try {
		await client.connect()
		console.log(client)
		const db = client.db('uncertain-universe')
		console.log(db.listCollections())
		return db.listCollections()
		// for (const c of collections) {
		// 	const collection = db.collection(c)
		// 	const postsFromCollection = await collection
		// 		.find({ file_name: chapter })
		// 		.toArray()
		// 	posts = [...posts, ...postsFromCollection]
		// }
	} catch (e) {
		console.error(e)
	} finally {
		await client.close()
	}
}

export async function getTopLevel() {
	try {
		await client.connect()
		const db = client.db('uncertain-universe')
		for (const c of collections) {
			const collection = db.collection(c)
			const postsFromCollection = await collection
				.find({ file_name: chapter })
				.toArray()
			posts = [...posts, ...postsFromCollection]
		}
		// const collection = db.collection('first-principles')
		// posts = await collection.find({ file_name: chapter }).toArray()
	} catch (e) {
		console.error(e)
	} finally {
		await client.close()
	}
}

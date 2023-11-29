const { MongoClient, ServerApiVersion } = require('mongodb')
const db_uri =
	'mongodb+srv://admin:srPiJzF8MVXkkqpL@sample-db.tkcfqem.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(db_uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
})

async function doesCollectionHaveDocuments(db, collectionName) {
	const collection = db.collection(collectionName)
	const count = await collection.countDocuments({}, { limit: 1 })
	return count > 0
}

export async function getTopLevelRoutes() {
	let routes = []
	try {
		await client.connect()
		const db = client.db('uncertain-universe')
		const collections = await db.listCollections().toArray()
		// routes = [...collections.map((collection) => collection.name)]
		for (let collectionInfo of collections) {
			const hasDocuments = await doesCollectionHaveDocuments(
				db,
				collectionInfo.name
			)
			// console.log(
			// 	`Collection ${collectionInfo.name} has documents: ${hasDocuments}`
			// )
			routes.push({
				name: collectionInfo.name,
				hasChildren: hasDocuments,
			})
		}
	} catch (e) {
		console.error(e)
	} finally {
		await client.close()
	}
	return routes
}

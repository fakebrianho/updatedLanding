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
o
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
		// routes = collections.map((collection) => ({ name: collection.name }))

		// const routes = collections.map()
		// console.log(db.collection('knowledge').find({ file_name: chapter }))
		// console.log(db.listCollections().toArray())
		// db.listCollections().toArray(function (err, collections) {
		// 	if (err) {
		// 		// Handle the error
		// 	} else {
		// 		// collections is an array of collection names
		// 		console.log(collections)
		// 	}
		// })

		// return db.listCollections()
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
	return routes
}

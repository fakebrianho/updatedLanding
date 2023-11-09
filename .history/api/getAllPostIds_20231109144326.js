const { MongoClient, ServerApiVersion } = require('mongodb')

const collections = ['first-principles', 'introduction']
const db_uri =
	'mongodb+srv://admin:srPiJzF8MVXkkqpL@sample-db.tkcfqem.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(db_uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
})

export async function getAllPostIds() {
	let allPosts = []
	try {
		await client.connect()
		const db = client.db('uncertain-universe')
		for (const c of collections) {
			const collection = db.collection(c)
			const postsFromCollection = await collection.find({}).toArray()
			allPosts = [...allPosts, ...postsFromCollection]
		}
	} catch (e) {
		console.error(e)
	} finally {
		await client.close()
	}
	// return allPosts
	return allPosts.map((post) => ({
		params: {
			chapter: post.file_name.toString(),
		},
	}))
}

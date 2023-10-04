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

export async function getDataContent(chapter) {
	let posts = []
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
	// return allPosts
	return posts.map((post) => ({
		...post,
		_id: post._id.toString(), // Convert ObjectId to string
		lastModified: post.lastModified
			? post.lastModified.toISOString()
			: null,
	}))
}
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

export async function getDataContent(chapter) {
	let posts = []
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
	// return allPosts
	return posts.map((post) => ({
		...post,
		_id: post._id.toString(), // Convert ObjectId to string
		lastModified: post.lastModified
			? post.lastModified.toISOString()
			: null,
	}))
}

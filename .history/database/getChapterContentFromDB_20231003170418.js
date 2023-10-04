// const { MongoClient, ServerApiVersion } = require('mongodb')
// const collections = ['first-principles', 'introduction']
// const db_uri =
// 	'mongodb+srv://admin:srPiJzF8MVXkkqpL@sample-db.tkcfqem.mongodb.net/?retryWrites=true&w=majority'

// const client = new MongoClient(db_uri, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	},
// })

// export async function getAllChapterIdsFromDB(chaptername) {
// 	try {
// 		await client.connect()
// 		await Promise.all(retrieveIDs(client, chaptername, chaptername))
// 	} catch (error) {
// 		console.error(error)
// 	} finally {
// 		await client.close()
// 	}
// }

// export async function getChapterContentFromDB(chapter) {
// 	try {
// 		await client.connect()
// 		await Promise.all(retrievePosts(client, chapter))
// 	} catch (error) {
// 		console.error(error)
// 	} finally {
// 		await client.close()
// 	}
// }

// async function retrieveIDs(client, branch, chaptername) {
// 	if (!collections.includes(branch)) {
// 		console.error('Cannot retrieve data from invalid collection: ', branch)
// 		return
// 	}

// 	try {
// 		const db = client.db('uncertain-universe')
// 		const collection = db.collection(branch)

// 		const chapter = await collection.findOne({ file_name: chaptername })
// 		return chapter
// 	} catch (e) {
// 		console.error(e)
// 	}
// }

// async function retrievePosts(client, branch) {
// 	if (!collections.includes(branch)) {
// 		console.error('Cannot retrieve data from invalid collection: ', branch)
// 		return
// 	}

// 	try {
// 		const db = client.db('uncertain-universe')
// 		const collection = db.collection(branch)

// 		const allPosts = await collection.find({}).toArray()

// 		console.log(`${branch}.json file has been saved`)
// 	} catch (e) {
// 		console.error(e)
// 	}
// }

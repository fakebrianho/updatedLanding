const { MongoClient, ServerApiVersion } = require('mongodb')
const collections = ['first-principles', 'introduction']
const db_uri =
	'mongodb+srv://admin:srPiJzF8MVXkkqpL@sample-db.tkcfqem.mongodb.net/?retryWrites=true&w=majority'

// const client = new MongoClient(db_uri, {
//         serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// })
// getAllChapterIdsFromDB
export async function getAllChapterIdsFromDB() {
	const client = await createClient()
	try {
		await client.connect()
		const chapters = await retrieveIDs(client)
		return [...chapters]
	} catch (error) {
		console.error(error)
	} finally {
		await client.close()
	}
}

export async function getChapterContentFromDB(chapter) {
	const client = await createClient()
	try {
		await client.connect()
		const posts = await retrievePosts(client, chapter)
		return posts
	} catch (error) {
		console.error(error)
	} finally {
		await client.close()
	}
}

async function retrieveIDs(client) {
	// if (!collections.includes(branch)) {
	//     console.error('Cannot retrieve data from invalid collection: ', branch)
	//     return
	// }

	try {
		const db = client.db('uncertain-universe')
		const collection = db.collection('first-principles')

		const chapters = await collection
			.find({}, { projection: { file_name: 1 } })
			.toArray()
		return chapters.map((chapter) => chapter.file_name)
	} catch (e) {
		console.error(e)
	}
}

async function retrievePosts(client, branch) {
	if (!collections.includes(branch)) {
		console.error('Cannot retrieve data from invalid collection: ', branch)
		return
	}

	try {
		const db = client.db('uncertain-universe')
		const collection = db.collection(branch)

		const allPosts = await collection.find({}).toArray()
		return allPosts

		console.log(`${branch}.json file has been saved`)
	} catch (e) {
		console.error(e)
	}
}

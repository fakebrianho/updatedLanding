// Run `npm run db` to retrieve all the documents on the command line.
const fs = require('fs')
const mongoose = require('mongoose')
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

// We currently have two collections populated: `first-principles` and `introduction`
async function retrievePosts(client, branch) {
	if (!collections.includes(branch)) {
		console.error('Cannot retrieve data from invalid collection: ', branch)
		return
	}

	try {
		const db = client.db('uncertain-universe')
		const collection = db.collection(branch)

		const allPosts = await collection.find({}).toArray()

		const allPostsJson = JSON.stringify(allPosts, null, 2)
		fs.writeFileSync(`./content/${branch}.json`, allPostsJson, 'utf8')

		console.log(`${branch}.json file has been saved`)
	} catch (e) {
		console.error(e)
	}
}

async function main() {
	try {
		await client.connect()
		await Promise.all(
			collections.map((col) => {
				return retrievePosts(client, col)
			})
		)
	} catch (error) {
		console.error(error)
	} finally {
		await client.close()
	}
}

main().catch(console.error)

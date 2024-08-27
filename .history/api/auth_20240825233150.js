const { MongoClient } = require('mongodb')
const db_uri =
	'mongodb+srv://admin:srPiJzF8MVXkkqpL@sample-db.tkcfqem.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(db_uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

async function connectToAuth(collectionName) {
	try {
		await client.connect()
		console.log('Connected to MongoDB')
		const database = client.db('uncertain-universe')
		const collection = database.collection(collectionName)
		return collection
	} catch (e) {
		console.error(e)
	} finally {
		await client.close()
	}
}
module.exports = { connectToCollection }

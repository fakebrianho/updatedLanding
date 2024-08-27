const { MongoClient } = require('mongodb')
const crypto = require('crypto')

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

function hashPassword(password) {
	return crypto.createHash('sha256').update(password).digest('hex')
}
async function verifyPassword(username, password) {
	const collection = await connectToAuth('users')
	const user = await collection.findOne({ username })
	if (!user) {
		throw new Error('User not found')
	}
	const hashedPassword = hashPassword(password)
	return hashedPassword === user.hashedPassword
}

module.exports = { verifyPassword }

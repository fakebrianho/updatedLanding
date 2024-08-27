const { MongoClient } = require('mongodb')
const crypto = require('crypto')

const db_uri =
	'mongodb+srv://admin:srPiJzF8MVXkkqpL@sample-db.tkcfqem.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(db_uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

async function connectToAuth() {
	try {
		await client.connect()
		console.log('Connected to MongoDB')
		const database = client.db('Auth')
		const collection = database.collection('Login')
		return collection
	} catch (e) {
		console.error(e)
	}
}

function hashPassword(password) {
	return crypto.createHash('sha256').update(password).digest('hex')
}

async function verifyPassword(password) {
	const collection = await connectToAuth()
	const authData = await collection.findOne({
		_id: '66cb38b55bda0876751d9e34',
	}) // Use the correct _id value
	console.log(authData)
	if (!authData) {
		throw new Error('Password not found')
	}
	const hashedPassword = hashPassword(password)
	return hashedPassword === authData.password
}

module.exports = { verifyPassword }

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
	const authData = await collection.findOne({ key: 'adminPassword' }) // Query based on the key field
	console.log('password', password)
	console.log('asdffdut', authData)
	if (!authData) {
		throw new Error('Password not found')
	}
	const hp = hashPassword(password)
	console.log('hp', hp)
	return hp === authData.password
}

module.exports = { verifyPassword }

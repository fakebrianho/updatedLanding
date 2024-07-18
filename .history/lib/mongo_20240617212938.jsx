// // This is the .jsx equivalent of mongodb.ts from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

// import { MongoClient } from 'mongodb'

// if (!process.env.MONGODB_URI) {
// 	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let clientPromise

// if (process.env.NODE_ENV === 'development') {
// 	// In development mode, use a global variable so that the value
// 	// is preserved across module reloads caused by HMR (Hot Module Replacement).
// 	if (!global._mongoClientPromise) {
// 		client = new MongoClient(uri, options)
// 		global._mongoClientPromise = client.connect()
// 	}
// 	clientPromise = global._mongoClientPromise
// } else {
// 	// In production mode, it's best to not use a global variable.
// 	client = new MongoClient(uri, options)
// 	clientPromise = client.connect().then((result) => {
// 		console.log('Connected successfully to the server', result)
// 	})
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options)
		global._mongoClientPromise = client.connect()
	}
	clientPromise = global._mongoClientPromise
} else {
	client = new MongoClient(uri, options)
	clientPromise = client.connect()
}

export default async function connectToDatabase() {
	try {
		const client = await clientPromise
		const db = client.db(process.env.DB_NAME)
		return db
	} catch (error) {
		console.error('Error connecting to the database:', error)
		throw error
	}
}

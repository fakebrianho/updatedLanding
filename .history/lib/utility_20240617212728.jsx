// /*
//     This file encapsulates all access to post and marginalia data stored in
//     MongoDB, it exposes methods for CRUD operations for reading and adding marginalia data. This file is used on the server side by the Next.js API route handler (pages/api/marginalia.jsx).
// */

// import clientPromise from './mongo'

// // `file_name` is file name of the post.
// export async function getMarginalia(file_name) {
// 	try {
// 		const client = await clientPromise

// 		// `first-principles` is hard-coded, need to change later
// 		const col = client
// 			.db(process.env.DB_NAME)
// 			.collection('first-principles')

// 		const post = await col.findOne({ file_name: file_name })
// 		if (!post) {
// 			console.log(
// 				'Fetching—was not able to locate post with file name: ',
// 				file_name
// 			)
// 			return null
// 		}
// 		const marginalia = post.marginalia

// 		if (marginalia) {
// 			return marginalia
// 		} else {
// 			return null
// 		}
// 	} catch (e) {
// 		console.error(e)
// 	}
// }

// // Add new marginalia `marg` to MongoDB document with `file_name`.
// export async function addMarginalia(file_name, marg) {
// 	try {
// 		const client = await clientPromise
// 		const db = await client.db(process.env.DB_NAME)
// 		const collections = await db.listCollections().toArray()
// 		let post

// 		for (const collection of collections) {
// 			const col = await db.collection(collection.name)
// 			post = await col.findOne({ file_name: file_name })
// 			if (post) {
// 				await col.updateOne(
// 					{ file_name: file_name },
// 					{
// 						$push: { marginalia: marg },
// 					}
// 				)
// 				return marg
// 			}
// 		}

// 		console.error(
// 			'Adding new marginalia—was not able to locate post with file name: ',
// 			file_name
// 		)
// 		return null
// 	} catch (e) {
// 		console.error(e)
// 	}
// }
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

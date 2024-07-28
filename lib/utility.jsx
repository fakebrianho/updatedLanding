/*
	This file encapsulates all access to post and marginalia data stored in
	MongoDB, it exposes methods for CRUD operations for reading and adding marginalia data. This file is used on the server side by the Next.js API route handler (pages/api/marginalia.jsx).
*/

import { ObjectId } from 'mongodb';
import connectToDatabase from './mongo'
// import clientPromise from './mongo'

// `file_name` is file name of the post.
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
export async function getMarginalia(file_name) {
	try {
		const db = await connectToDatabase();
		const collection = db.collection('first-principles');
		const post = await collection.findOne({ file_name: file_name });
		if (!post) {
			console.log(
				'Fetching—was not able to locate post with file name: ',
				file_name
			);
			return null;
		}
		let marginalia = post.marginalia;

		if (marginalia) {
			let modified = false;
			marginalia.forEach(item => {
				if (!item._id) {
					item._id = new ObjectId();
					modified = true;
				}
			});

			if (modified) {
				await collection.updateOne(
					{ _id: post._id },
					{ $set: { marginalia: marginalia } }
				);
			}

			const marginaliaWithSimpleId = marginalia.map(item => ({ ...item, _id: item._id.toString() }));

			return marginaliaWithSimpleId;
		} else {
			return null;
		}
	} catch (error) {
		console.error('Error in getMarginalia:', error)
		throw error
	}
}

// Add new marginalia `marg` to MongoDB document with `file_name`.
export async function addMarginalia(file_name, marg) {
	try {
		const db = await connectToDatabase();
		const collections = await db.listCollections().toArray();
		let post;

		for (const collection of collections) {
			const col = await db.collection(collection.name)
			post = await col.findOne({ file_name: file_name })
			if (post) {
				const margWithId = {
					...marg,
					_id: new ObjectId()
				};
				await col.updateOne(
					{ file_name: file_name },
					{
						$push: { marginalia: margWithId },
					}
				);
				return margWithId;
			}
		}

		console.error(
			'Adding new marginalia—was not able to locate post with file name: ',
			file_name
		);
		return null;
	} catch (e) {
		console.error(e)
	}
}

// Delete a marginalia `marg` from MongoDB document with `file_name`.
export async function deleteMarginalia(file_name, id) {
	try {
		const db = await connectToDatabase();
		const collections = await db.listCollections().toArray();
		let post;

		for (const collection of collections) {
			const col = await db.collection(collection.name);
			post = await col.findOne({ file_name: file_name });
			if (post) {
				const result = await col.updateOne(
					{ 'marginalia._id': new ObjectId(id) },
					{ $pull: { marginalia: { _id: new ObjectId(id) } } }
				);

				return result;
			}
		}

		console.error(
			'Deleting marginalia—was not able to locate post with file name: ',
			file_name
		);
		return null;
	} catch (e) {
		console.error(e);
	}
}
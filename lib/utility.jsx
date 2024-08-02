/*
	This file encapsulates all access to post and marginalia data stored in
	MongoDB, it exposes methods for CRUD operations for reading and adding marginalia data. This file is used on the server side by the Next.js API route handler (pages/api/marginalia.jsx).
*/

import { ObjectId } from 'mongodb';
import connectToDatabase from './mongo'

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
			// Make sure that all marginalia has `_id` field filled
			const updatedMarginalia = marginalia.map(item => {
				if (!item._id) {
					return { ...item, _id: new ObjectId() };
				}
				return item;
			});

			if (JSON.stringify(marginalia) !== JSON.stringify(updatedMarginalia)) {
				await collection.updateOne(
					{ _id: post._id },
					{ $set: { marginalia: updatedMarginalia } }
				);
			}

			const approvedMarginaliaWithSimpleId = updatedMarginalia
				.filter(item => item.approved === true)
				.map(item => ({ ...item, _id: item._id.toString() }));

			return approvedMarginaliaWithSimpleId;
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
				const unapprovedMargWithId = {
					...marg,
					approved: false,
					_id: new ObjectId()
				};
				await col.updateOne(
					{ file_name: file_name },
					{
						$push: { marginalia: unapprovedMargWithId },
					}
				);
				return unapprovedMargWithId;
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
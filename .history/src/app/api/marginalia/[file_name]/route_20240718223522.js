import {
	addMarginalia,
	getMarginalia,
	deleteMarginalia,
} from '../../../../../lib/utility'
// export async function GET(request, { params }) {
// 	const file_name = params.file_name
// 	try {
// 		const testResponse = {
// 			marg: [
// 				{
// 					id: 1,
// 					name: 'Test User',
// 					body: 'Test body',
// 					picture: 'test.jpg',
// 				},
// 			],
// 		}
// 		return new Response(JSON.stringify(testResponse), {
// 			status: 200,
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		})
// 	} catch (e) {
// 		console.error('Error fetching marginalia:', e)
// 		return new Response(JSON.stringify({ error: e.toString() }), {
// 			status: 500,
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		})
// 	}
// }
export async function GET(request, { params }) {
	const file_name = params.file_name
	try {
		const marginalia = await getMarginalia(file_name)
		// const testResponse = {
		// 	marg: [
		// 		{
		// 			id: 1,
		// 			name: 'Test User',
		// 			body: 'Test body',
		// 			picture: 'test.jpg',
		// 		},
		// 	],
		// }
		// console.log('asdfaf', (marginalia[0].file_name = 'test'))
		console.log(marginalia[1])

		const res = { marg: marginalia, file_name: file_name }
		return new Response(JSON.stringify(res), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	} catch (e) {
		console.error('Error fetching marginalia:', e)
		return new Response(JSON.stringify({ error: e.toString() }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}
}

export async function PUT(req, { params }) {
	try {
		const { file_name } = params

		// Consume the request body stream
		const chunks = []
		for await (const chunk of req.body) {
			chunks.push(chunk)
		}
		const body = Buffer.concat(chunks)
		const data = JSON.parse(body.toString())

		// Extract the properties from the request body
		const { name, body: bodyContent, picture } = data

		const marg = {
			name,
			body: bodyContent,
			picture,
		}

		const result = await addMarginalia(file_name, marg)

		return new Response(JSON.stringify(result), {
			status: 200,
		})
	} catch (e) {
		console.error(e)
		return new Response(JSON.stringify({ error: e.toString() }), {
			status: 500,
		})
	}
}

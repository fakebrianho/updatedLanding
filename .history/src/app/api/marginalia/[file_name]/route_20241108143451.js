import {
	addMarginalia,
	getMarginalia,
	deleteMarginalia,
} from '../../../../../lib/utility'

export async function GET(request, { params }) {
	const file_name = params.file_name
	try {
		const marginalia = await getMarginalia(file_name)
		const res = { marg: marginalia, file_name: file_name }
		console.log('asdjfkasjdf;jsk;fj;')
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

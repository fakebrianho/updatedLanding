import { addMarginalia, getMarginalia } from '../../../../lib/api/marginalia'
import { NextResponse } from 'next/server'

// export async function GET(request) {
// 	const { searchParams } = new URL(request.url)
// 	const fileName = searchParams.get('file_name')

// 	if (fileName === 'introduction') {
// 		// Retrieve the data for the introduction endpoint
// 		const introductionData = {
// 			// Your introduction data here
// 			title: 'Introduction',
// 			content: 'Welcome to the introduction page!',
// 		}

// 		return new Response(JSON.stringify(introductionData), {
// 			status: 200,
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		})
// 	} else if (fileName === 'chapter1') {
// 		// Retrieve the data for chapter1 endpoint
// 		const chapter1Data = {
// 			// Your chapter1 data here
// 			title: 'Chapter 1',
// 			content: 'This is the content of chapter 1',
// 		}

// 		return new Response(JSON.stringify(chapter1Data), {
// 			status: 200,
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		})
// 	} else {
// 		// Handle requests for other file names or return an error
// 		return new Response(JSON.stringify({ message: 'File not found' }), {
// 			status: 404,
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
		return new Response(JSON.stringify(marginalia), {
			status: 200,
		})
	} catch (e) {
		console.log(e)
		return new Response(JSON.stringify({ error: e.toString() }), {
			status: 500,
		})
	}
	// }
	// else if (req.method == 'PUT') {
	// 	console.log('Body of request is: ', req.body)
	// 	const { file_name, name, body, picture } = req.body
	// 	const marg = {
	// 		name: name,
	// 		body: body,
	// 		picture: picture,
	// 	}
	// 	try {
	// 		const result = await addMarginalia(file_name, marg)
	// 		return res.status(200).json(result)
	// 	} catch (e) {
	// 		console.log(e)
	// 		return res.status(500).json({ error: e.toString() })
	// 	}
	// }
}
export async function PUT(req, { params }) {
	// console.log(req.body)
	// // const file_name = params.file_name
	// console.log(params)
	const { file_name, name, body, picture } = req.body
	const marg = {
		name: name,
		body: body,
		picture: picture,
	}
	console.log(marg)
	try {
		const result = await addMarginalia(file_name, marg)
		return new Response(JSON.stringify(result), {
			status: 200,
		})
	} catch (e) {
		return new Response(JSON.stringify({ error: e.toString() }), {
			status: 500,
		})
	}
}

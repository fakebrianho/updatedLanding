import { addMarginalia, getMarginalia } from '../../../../lib/api/marginalia'

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
export async function GET(request) {
	console.log('Request method is: ', request.query)
	// if (req.method === 'GET') {
	// console.log('Query is: ', req.query)
	// const { searchParams } = new URL(req.url)
	// const fileName = searchParams.get('file_name')
	// console.log(fileName)
	// const { file_name } = req.query
	// try {
	// 	const marginalia = await getMarginalia(file_name)
	// 	return res.status(200).json(marginalia)
	// } catch (e) {
	// 	console.log(e)
	// 	return res.status(500).json({ error: e.toString() })
	// }
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

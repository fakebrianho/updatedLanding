import { addMarginalia, getMarginalia } from '../../../../lib/api/marginalia'

export default function handler(request, response) {
	if (request.method === 'GET') {
		// Extract the dynamic file name from the request URL
		const { file_name } = request.query

		// Handle GET request based on the dynamic file name
		if (file_name === 'introduction') {
			// Retrieve the data for the introduction endpoint
			const introductionData = {
				// Your introduction data here
				title: 'Introduction',
				content: 'Welcome to the introduction page!',
			}

			response.status(200).json(introductionData)
		} else {
			// Handle requests for other file names or return an error
			response.status(404).json({ message: 'File not found' })
		}
	} else {
		// Handle other HTTP methods or return an error
		response.status(405).json({ message: 'Method not allowed' })
	}
}
// export default async function handler(req, res) {
// 	console.log('Request method is: ', req)
// 	if (req.method === 'GET') {
// 		console.log('Query is: ', req.query)
// 		const { file_name } = req.query
// 		try {
// 			const marginalia = await getMarginalia(file_name)
// 			return res.status(200).json(marginalia)
// 		} catch (e) {
// 			console.log(e)
// 			return res.status(500).json({ error: e.toString() })
// 		}
// 	} else if (req.method == 'PUT') {
// 		console.log('Body of request is: ', req.body)
// 		const { file_name, name, body, picture } = req.body
// 		const marg = {
// 			name: name,
// 			body: body,
// 			picture: picture,
// 		}
// 		try {
// 			const result = await addMarginalia(file_name, marg)
// 			return res.status(200).json(result)
// 		} catch (e) {
// 			console.log(e)
// 			return res.status(500).json({ error: e.toString() })
// 		}
// 	}
// }

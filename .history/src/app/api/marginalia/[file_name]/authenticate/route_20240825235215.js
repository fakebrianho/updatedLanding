import { verifyPassword } from '../../../../api/auth'

export default async function POST(req, res) {
	if (req.method === 'POST') {
		const { username, password } = req.body
		try {
			const isMatch = await verifyPassword(username, password)
			if (isMatch) {
				res.status(200).json({ message: 'Authentication successful' })
			} else {
				res.status(401).json({ message: 'Invalid credentials' })
			}
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' })
	}
}

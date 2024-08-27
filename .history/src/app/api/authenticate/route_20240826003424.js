import { verifyPassword } from '../../../../api/auth'

export async function POST(req, res) {
	const { password } = req.body
	try {
		const isMatch = await verifyPassword(password)
		if (isMatch) {
			res.status(200).json({ message: 'Authentication successful' })
		} else {
			res.status(401).json({ message: 'Invalid credentials' })
		}
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

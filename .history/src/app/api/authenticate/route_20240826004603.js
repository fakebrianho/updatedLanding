import { verifyPassword } from '../../../../api/auth'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
	try {
		const { password } = await req.json()
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

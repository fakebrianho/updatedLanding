import { verifyPassword } from '../../../../api/auth'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
	try {
		const { password } = await req.json()
		console.log('pppp' password)
		const isMatch = await verifyPassword(password)
		if (isMatch) {
			return NextResponse.json({ message: 'Authentication successful' })
		} else {
			return NextResponse.json({ message: 'Invalid credentials' })
		}
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 })
	}
}

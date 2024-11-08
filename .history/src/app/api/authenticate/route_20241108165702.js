import { verifyPassword } from '../../../../api/auth'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
	try {
		const { password } = await req.json()
		// console.log('pppp', password)
		const isMatch = await verifyPassword(password)
		console.log('isMatch', isMatch)
		if (isMatch) {
			return NextResponse.json(
				{ message: 'Authentication successful' },
				{ status: 200 }
			)
		} else {
			// return NextResponse.json({ message: 'Invalid credentials' })
			return NextResponse.json(
				{ message: 'Invalid credentials' },
				{ status: 401 }
			)
		}
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 })
	}
}

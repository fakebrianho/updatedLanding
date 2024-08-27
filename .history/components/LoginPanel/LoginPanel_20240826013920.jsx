'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPanel() {
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const [isAuthenticated, setIsAuthenticated] = useState(false) // State for authentication status

	const router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = await fetch('/api/authenticate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ password }),
		})
		const data = await res.json()
		setMessage(data.message)
		if (res.status === 200) {
			// alert('Authentication successful')
			console.log('weeeee')
			setIsAuthenticated(true) // Update authentication status

			// Perform any additional actions on successful login
		}
	}
	return (
		<div>
			<h1>Admin Login</h1>
			{isAuthenticated ? (
				<div>
					<h2>Welcome, Admin!</h2>
					<p>You are now logged in.</p>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit'>Login</button>
				</form>
			)}
			<p>{message}</p>
		</div>
	)
}

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPanel() {
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
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
			alert('asdfasdfsafa')
		}
	}
}

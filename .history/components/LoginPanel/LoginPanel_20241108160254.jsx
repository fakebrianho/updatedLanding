'use client'
import styles from './LoginPanel.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MarginaliaRender from '../MarginaliaRender/MarginaliaRender'

export default function LoginPanel(props) {
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const [isAuthenticated, setIsAuthenticated] = useState(false) // State for authentication status

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
			setIsAuthenticated(true) // Update authentication status
			alert('Authentication successful')
			// Perform any additional actions on successful login
		}
	}

	const mapMarginalia = (entry) => {
		if (Array.isArray(entry.marg)) {
			return entry.marg.map((item, index) => (
				<div key={index} className={styles.gridItem}>
					<MarginaliaRender
						key={index}
						id={item._id}
						username={item.name}
						content={item.body}
						picture={item.picture}
						fileName={entry.file_name} // Pass the file name
					/>
				</div>
			))
		} else {
			return null
		}
	}
	console.log(props.data)

	return (
		<div className={styles.fullScreen}>
			{isAuthenticated ? (
				<div className={styles.container}>
					{props.data.map((item, index) => mapMarginalia(item))}
				</div>
			) : (
				<>
					<h1>Admin Login</h1>
					<form onSubmit={handleSubmit}>
						<input
							className={styles.passwordInput}
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type='submit' className={styles.loginButton}>
							Login
						</button>
					</form>
				</>
			)}
			<p>{message}</p>
		</div>
	)
}

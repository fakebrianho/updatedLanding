import React, { useState, useEffect } from 'react'
import styles from './Developers.module.css'

export default function Developers() {
	const [activeIndex, setActiveIndex] = useState(0)
	const names = ['Miaoye Que', 'Cindy Hu', 'Brian Ho']

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => (current + 1) % names.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<footer className='dev_container'>
			<h1 className={styles.header}>Developed By:</h1>
			<div className={styles.textContainer}>
				{names.map((name, index) => (
					<p
						key={name}
						className={`${styles.tag} ${
							index === activeIndex ? styles.shimmer : ''
						}`}
					>
						{name}
					</p>
				))}
			</div>
		</footer>
	)
}

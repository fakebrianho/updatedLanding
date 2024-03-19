import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from './marginalia.module.css'
import { useEffect } from 'react'

export default function Marginalia({ id, username, content, picture }) {
	useEffect(() => {
		randomizeMarg()
	})

	const randomizeMarg = () => {
		let r
		let list = document.getElementsByClassName('marginalia')
		for (var i = 0; i < list.length; i++) {
			r = Math.floor(1 + Math.random() * 30)
			list[i].style.marginTop = r + 'px'
			console.log('changed margin')
		}
	}

	return (
		<div key={id} className={styles.marginalia}>
			<p className={styles.text}>{content}</p>
			{picture && (
				<div className={styles.picture}>
					<img src={picture} alt='marginalia picture' width={200} />
				</div>
			)}
			<p className={styles.username}>{username}</p>
		</div>
	)
}

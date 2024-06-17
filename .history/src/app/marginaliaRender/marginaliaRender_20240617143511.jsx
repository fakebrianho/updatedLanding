import styles from './marginaliaRender.module.css'
import { useState } from 'react'
export default function MarginaliaRender({ username, content, picture }) {
	return (
		<div className={styles.container}>
			<p>
				<span className={styles.bold}>Name: </span> {username}
			</p>
			<p className={`marginalia_text`}>
				<span className={styles.bold}>Text:</span> {content}
			</p>
			{picture !== null ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
		</div>
	)
}

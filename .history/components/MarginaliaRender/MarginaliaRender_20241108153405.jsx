'use client'
import styles from './MarginaliaRender.module.css'
import { useState } from 'react'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
export default function MarginaliaRender({
	id,
	username,
	content,
	picture,
	fileName,
}) {
	const router = useRouter()
	const deleteMarginalia = async () => {
		try {
			const response = await fetch(`/api/marginalia/${fileName}/${id}`, {
				method: 'DELETE',
			})

			if (response.ok) {
				router.refresh()
			} else {
				console.error(
					'Failed to delete marginalia:',
					response.statusText
				)
			}
		} catch (error) {
			console.error('Error deleting marginalia:', error)
		}
	}
	const updateMarginalia = async () => {
		try {
			const response = await fetch(`/api/marginalia/${fileName}/${id}`, {
				method: 'PATCH',
			})
			if (response.ok) {
				router.refresh()
			} else {
				console.error(
					'Failed to delete marginalia:',
					response.statusText
				)
			}
		} catch (error) {
			console.log('Error updating marginalia', error)
		}
	}
	return (
		<div className={`${styles.container}`}>
			<h1>
				<span className={styles.bold}>Page Name: </span> {fileName}
			</h1>
			<p>
				<span className={styles.bold}>Username: </span> {username}
			</p>
			<p className={`marginalia_text`}>
				<span className={styles.bold}>Content:</span> {content}
			</p>
			<p className={styles.delete} onClick={deleteMarginalia}>
				Delete
			</p>
			{picture !== null ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
		</div>
	)
}

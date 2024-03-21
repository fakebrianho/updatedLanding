import React from 'react'
import styles from './DarkModeToggle.module.css'

function DarkModeToggle() {
	return (
		<>
			<input id='darkModeToggle' type='checkbox'></input>
			<label className={styles.label} htmlFor='darkModeToggle'></label>
		</>
	)
}

export default DarkModeToggle

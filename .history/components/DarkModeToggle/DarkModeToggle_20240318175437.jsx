import React from 'react'
import styles from './DarkModeToggle.module.css'

function DarkModeToggle(props) {
	return (
		<>
			<input
				className={styles.check}
				id='darkModeToggle'
				type='checkbox'
				onClick={props.toggleDark}
			></input>
			<label className={styles.label} htmlFor='darkModeToggle'></label>
		</>
	)
}

export default DarkModeToggle

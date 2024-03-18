import React from 'react'
import styles from './DarkModeToggle.module.css'
import { useRef } from 'react'

function DarkModeToggle(props) {
	const checkBox = useRef()

	return (
		<>
			<input
				ref={checkBox}
				className={styles.check}
				id='darkModeToggle'
				type='checkbox'
				onClick={props.toggle}
			></input>
			<label className={styles.label} htmlFor='darkModeToggle'></label>
		</>
	)
}

export default DarkModeToggle

import React, { useEffect } from 'react'
import styles from './DarkModeToggle.module.css'
import { useRef } from 'react'

function DarkModeToggle(props) {
	const checkBox = useRef()
	useEffect(() => {
		if (props.mode === 'dark') {
			// ref.current.st
			console.log(checkBox.current)
		}
	}, [])

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

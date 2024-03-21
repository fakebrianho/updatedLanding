import React, { useEffect } from 'react'
import styles from './DarkModeToggle.module.css'
import { useRef } from 'react'

function DarkModeToggle(props) {
	const checkBox = useRef()
	useEffect(() => {
		if (props.mode === 'dark') {
			// ref.current.st
			console.log(checkBox.current.checked)
			console.log(props.mode)
			if (checkBox.current) {
				if (props.mode === 'dark') {
					checkBox.current.checked = true
				} else {
					checkBox.current.checked = false
				}
			}
			alert(props.mode)
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

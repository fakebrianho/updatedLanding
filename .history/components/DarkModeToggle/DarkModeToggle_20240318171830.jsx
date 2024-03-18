import React from 'react'
import styles from './DarkModeToggle.module.css'

function DarkModeToggle() {
	return (
		<>
			<input className='darkModeToggle' type='checkbox'></input>
			<label htmlFor='darkModeToggle'></label>
		</>
	)
}

export default DarkModeToggle

import React from 'react'
import styles from './CentralNode.module.css'
import CurrentTitle from '../CurrentTitle/CurrentTitle'
export const CentralNode = (props) => {
	console.log(props)
	console.log(cleanData(props.title))

	return (
		// <div className={styles.container}>
		<div className={styles.gradient}>
			<CurrentTitle title={props.title} />
		</div>
		// </div>
	)
}

function cleanData(data) {
	let splitString = data.split(' ')
	console.log(data)
	splitString.map((word) => {
		return word.slice(0, 1).toUpperCase + word.slice(1)
	})
	return splitString.join(' ')
	// splitString.forEach(word=>{
	// 	return
	// })
}

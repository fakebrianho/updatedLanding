import React from 'react'
import styles from './CentralNode.module.css'
import CurrentTitle from '../CurrentTitle/CurrentTitle'
import EnterButton from '../EnterButton/EnterButton'

export const CentralNode = (props) => {
	const cleanTitle = cleanData(props.title)
	console.log(cleanData(props.title))

	return (
		// <div className={styles.container}>
		<div className={styles.gradient}>
			<CurrentTitle title={cleanTitle} />
			<EnterButton />
		</div>
		// </div>
	)
}

function cleanData(data) {
	let splitString = data.split(' ')
	splitString = splitString.map((word) => {
		return word.slice(0, 1).toUpperCase() + word.slice(1)
	})
	return splitString.join(' ')
}

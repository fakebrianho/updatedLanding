import React from 'react'
import styles from './CentralNode.module.css'
import CurrentTitle from '../CurrentTitle/CurrentTitle'
import EnterButton from '../EnterButton/EnterButton'

export const CentralNode = (props) => {
	const cleanTitle = cleanData(props.title)
	return (
		<div className={styles.gradient}>
			<CurrentTitle title={cleanTitle} />
			{!props.topLevel && <EnterButton chapter={props.title} />}
		</div>
	)
}

function cleanData(data) {
	let splitString = data.split('-')
	splitString = splitString.map((word) => {
		return word.slice(0, 1).toUpperCase() + word.slice(1)
	})
	return splitString.join(' ')
}

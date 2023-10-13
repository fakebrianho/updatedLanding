import React from 'react'
import styles from './CentralNode.module.css'
import CurrentTitle from '../CurrentTitle/CurrentTitle'
export const CentralNode = (props) => {
	console.log(props)
	return (
		// <div className={styles.container}>
		<div className={styles.gradient}>
			<CurrentTitle title={props.title} />
		</div>
		// </div>
	)
}

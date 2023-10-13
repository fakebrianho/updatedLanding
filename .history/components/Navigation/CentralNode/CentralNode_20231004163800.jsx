import React from 'react'
import styles from './CentralNode.module.css'
import CurrentTitle from '../CurrentTitle/CurrentTitle'
export const CentralNode = (props) => {
	return (
		// <div className={styles.container}>
		<div className={styles.gradient}>
			<CurrentTitle title={props.title} />
		</div>
		// </div>
	)
}

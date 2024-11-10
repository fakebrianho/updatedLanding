import React, { forwardRef } from 'react'
import CurrentTitle from '../../CurrentTitle/CurrentTitle'
import EnterButton from '../../EnterButton/EnterButton'
import styles from './MobileCenter.module.css'

function cleanData(data) {
	let splitString = data.split('-')
	splitString = splitString.map((word) => {
		return word.slice(0, 1).toUpperCase() + word.slice(1)
	})
	return splitString.join(' ')
}

const MobileCenter = forwardRef((props, ref) => {
	console.log('propstitle', props.title)
	const cleanTitle = cleanData(props.title)
	console.log('cleanedtitle', cleanTitle)
	return (
		<div
			ref={ref}
			className={`${styles.gradient} ${styles.active}`}
			onClick={props.onClick}
			// data-name={props.title}
			data-name={cleanTitle}
			data-title={'center'}
		>
			<CurrentTitle title={cleanTitle} />
			{/* {!props.topLevel && <EnterButton chapter={props.title} />} */}
		</div>
	)
})

MobileCenter.displayName = 'MobileCenter'

export default MobileCenter

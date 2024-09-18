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

function MobileCenter(props) {
	console.log(props)
	const cleanTitle = cleanData(props.title)
	return (
		<div className={`${styles.gradient}`}>
			<CurrentTitle title={cleanTitle} />
			{!props.topLevel && <EnterButton chapter={props.title} />}
		</div>
	)
}

export default MobileCenter
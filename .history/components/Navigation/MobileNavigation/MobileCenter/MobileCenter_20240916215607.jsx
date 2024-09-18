import CurrentTitle from '../../CurrentTitle/CurrentTitle'
import EnterButton from '../../EnterButton/EnterButton'

function cleanData(data) {
	let splitString = data.split('-')
	splitString = splitString.map((word) => {
		return word.slice(0, 1).toUpperCase() + word.slice(1)
	})
	return splitString.join(' ')
}

function MobileCenter() {
	const cleanTitle = cleanData(props.title)
	return (
		<div className={`${styles.gradient} ${styles.mobile}`}>
			<CurrentTitle title={cleanTitle} />
			{!props.topLevel && <EnterButton chapter={props.title} />}
		</div>
	)
}

export default MobileCenter

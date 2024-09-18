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
	return <div>MobileCenter</div>
}

export default MobileCenter

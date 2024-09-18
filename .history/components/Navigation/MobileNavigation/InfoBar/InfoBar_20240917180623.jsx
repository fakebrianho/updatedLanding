import styles from './InfoBar.module.css'
import { useEffect } from 'react'
function InfoBar(props) {
	console.log(props.data)
	// useEffect(() => {

	// },[props.data])}
	return (
		<div className={styles.container}>
			<div>&#x3c;</div>
			<div>
				<p>{props.name}</p>
			</div>
			<div>&#x3e;</div>
		</div>
	)
}

export default InfoBar

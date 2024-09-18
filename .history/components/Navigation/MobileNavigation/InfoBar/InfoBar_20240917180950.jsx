import styles from './InfoBar.module.css'
import { useEffect } from 'react'
function InfoBar(props) {
	useEffect(() => {
		if (props.data) {
			console.log(props.data.getAttribute('data-name'))
		}
	}, [props.data]) // Correctly close useEffect
	return (
		<div className={styles.container}>
			<div>&#x3c;</div>
			<div>
				<p>
					{props.data
						.getAttribute('data-name')
						.split('-')
						.map((word) => {
							return (
								word.substring(0, 1).toUpperCase() +
								word.substring(1)
							)
						})
						.join(' ')}
				</p>
			</div>
			<div>&#x3e;</div>
		</div>
	)
}

export default InfoBar

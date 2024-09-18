import styles from './InfoBar.module.css'
function InfoBar(props) {
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

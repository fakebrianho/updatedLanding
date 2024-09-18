import styles from './InfoBar.module.css'
function InfoBar(props) {
	console.log(props.count)
	return (
		<div className={styles.full}>
			<div className={styles.container}>
				<div
					className={styles.navigation}
					onClick={() =>
						props.previous(props.data.getAttribute('data-index'))
					}
				>
					&#x3c;
				</div>
				<div className={styles.name}>
					<p>
						{props.data &&
							props.data
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
				<div
					className={styles.navigation}
					onClick={() =>
						props.next(props.data.getAttribute('data-index'))
					}
				>
					&#x3e;
				</div>
			</div>
		</div>
	)
}

export default InfoBar

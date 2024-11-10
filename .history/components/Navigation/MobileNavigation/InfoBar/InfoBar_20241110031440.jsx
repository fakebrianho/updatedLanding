import styles from './InfoBar.module.css'
function InfoBar(props) {
	try {
		console.log(
			'87e647586790wertyuiooooo',
			props.data.getAttribute('data-name')
		)
	} catch {
		console.log('nun')
	}
	return (
		<div className={styles.full}>
			<div className={styles.container}>
				{props.count > 0 &&
					props.data &&
					props.data.getAttribute('data-title') !== 'center' && (
						<div
							className={styles.navigation}
							onClick={() =>
								props.previous(
									props.data.getAttribute('data-index')
								)
							}
						>
							&#x3c;
						</div>
					)}

				<div className={styles.name}>
					<p>
						{props.data
							? props.data
									.getAttribute('data-name')
									.split('-')
									.map((word) => {
										return (
											word.substring(0, 1).toUpperCase() +
											word.substring(1)
										)
									})
									.join(' ')
							: 'Please Select A Chapter'}
					</p>
				</div>
				{props.count > 0 &&
					props.data &&
					props.data.getAttribute('data-title') !== 'center' && (
						<div
							className={styles.navigation}
							onClick={() =>
								props.next(
									props.data.getAttribute('data-index')
								)
							}
						>
							&#x3e;
						</div>
					)}
			</div>
		</div>
	)
}

export default InfoBar

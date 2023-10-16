import styles from './ModalMenu.module.css'
export default function ModalMenu() {
	return (
		<div className={styles.modal}>
			<ol>
				<li>About</li>
				<li>Table of Contents</li>
			</ol>
		</div>
	)
}

import styles from './NavBarFull.module.css'
export default function NavBarFull() {
	return (
		<section className={styles.navContainer}>
			<div className={styles.navBarFull}>
				<div className={styles.navItem}>About</div>
				<div className={styles.navItem}>Contact</div>
				<div className={styles.navItem}>Read</div>
				<div className={styles.navItem}>Table of Contents</div>
				<div className={styles.navItem}>Subscribe</div>
			</div>
		</section>
	)
}

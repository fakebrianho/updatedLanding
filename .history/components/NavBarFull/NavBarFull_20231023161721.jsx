import styles from './NavBarFull.module.css'
export default function NavBarFull() {
	return (
		<section className={styles.navContainer}>
			<div>About</div>
			<div>Contact</div>
			<div>Read</div>
			<div>Table of Contents</div>
			<div>Subscribe</div>
		</section>
	)
}

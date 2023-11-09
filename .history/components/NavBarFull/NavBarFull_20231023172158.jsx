import styles from './NavBarFull.module.css'
import Image from 'next/image'
export default function NavBarFull() {
	return (
		<section className={styles.navContainer}>
			<div className={styles.navBarFull}>
				<div className={styles.logo}>
					<Image
						src='/uncertain-universe-logo.svg'
						className='logo'
						height={75}
						width={75}
						alt='Logo'
					></Image>
				</div>
				<div className={styles.navItem}>About</div>
				<div className={styles.navItem}>Contact</div>
				<div className={styles.navItem}>Read</div>
				<div className={styles.navItem}>Table of Contents</div>
				<div className={styles.navItem}>Subscribe</div>
			</div>
		</section>
	)
}

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
						height={50}
						width={50}
						alt='Logo'
					></Image>
				</div>
				<div className={styles.linkNav}>
					<div className={styles.navItem}>
						<p>About</p>
					</div>
					<div className={styles.navItem}>
						<p>Contact</p>
					</div>
					<div className={styles.navItem}>
						<p>Table of Contents</p>Table of Contents
					</div>
					<div className={styles.navItem}>Subscribe</div>
				</div>
				<div className={styles.b}></div>
			</div>
		</section>
	)
}

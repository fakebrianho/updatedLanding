import styles from './NavBarFull.module.css'
import Image from 'next/image'
import usePage from '../../context/pageContext'

export default function NavBarFull() {
	const { lenis } = usePage()
	const scrollToSubscribeSection = () => {
		const section = document.querySelector('.subscribe-content')
		const top = section.offsetTop
		lenis.scrollTo(top, {
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		})
	}
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
						<p>Table of Contents</p>
					</div>
					<div
						className={styles.navItem}
						onClick={() => scrollToSubscribeSection()}
					>
						<p>Subscribe</p>
					</div>
				</div>
				<div className={styles.b}></div>
			</div>
		</section>
	)
}

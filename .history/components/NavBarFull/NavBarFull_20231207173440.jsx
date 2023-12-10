import styles from './NavBarFull.module.css'
import Image from 'next/image'
import usePage from '../../context/pageContext'
import { useRouter } from 'next/navigation'

export default function NavBarFull(props) {
	const { lenis } = usePage()
	const router = useRouter()
	const scrollToSubscribeSection = () => {
		const section = document.querySelector('.subscribe-content')
		lenis.scrollTo(section, {
			duration: 1.8,
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
						onClick={() => router.push('/')}
					></Image>
				</div>
				<div className={styles.linkNav}>
					<div
						className={
							props.color === 'white'
								? styles.navItemWhite
								: styles.navItem
						}
					>
						<p onClick={() => router.push('/about')}>About</p>
					</div>
					<div
						className={
							props.color === 'white'
								? styles.navItemWhite
								: styles.navItem
						}
					>
						<p onClick={() => router.push('/contact')}>Contact</p>
					</div>
					<div
						className={
							props.color === 'white'
								? styles.navItemWhite
								: styles.navItem
						}
					>
						<p onClick={() => router.push('/tableOfContent')}>
							Table of Contents
						</p>
					</div>
					<div
						className={styles.navItem}
						onClick={() => scrollToSubscribeSection()}
					>
						<p>Subscribe</p>
					</div>
				</div>
				<div
					className={styles.b}
					onClick={() => router.push('/baseNavigation')}
				></div>
			</div>
		</section>
	)
}

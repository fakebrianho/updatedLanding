import styles from './NavBarFull.module.css'
import Image from 'next/image'
import usePage from '../../context/pageContext'
import DarkModeToggle from '../DarkModeToggle'
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
			<div
				className={`
					${props.sub ? styles.navBarFull : styles.navBarFullNoSub} ${
					props.mode === 'dark' ? styles.darkMode : styles.lightMode
				}`}
			>
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
							props.mode === 'light'
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
						<p onClick={() => router.push('/baseNavigation')}>
							Navigate
						</p>
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
					{props.sub && (
						<div
							className={
								props.color === 'white'
									? styles.navItemWhite
									: styles.navItem
							}
						>
							<p onClick={() => scrollToSubscribeSection()}>
								Subscribe
							</p>
						</div>
					)}
				</div>
				<div
					className={styles.b}
					onClick={() => router.push('/chapters/introduction')}
				></div>
			</div>
		</section>
	)
}

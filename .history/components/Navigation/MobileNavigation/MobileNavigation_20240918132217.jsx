import MobileCenter from './MobileCenter/MobileCenter'
import InfoBar from './InfoBar/InfoBar'
import styles from './MobileNavigation.module.css'
import { useRef, useState } from 'react'
import Enter from './Enter/Enter'
import gsap from 'gsap'
import { AnimatePresence, motion } from 'framer-motion'

function MobileNavigation(props) {
	const selectedRef = useRef()
	const positions = []
	const [active, setActive] = useState(null)
	const num = props.count
	const centralCircleDiameter = 250
	const childNodeDiameter = 25
	const radiusPadding = 0 // Adjust this to your needs
	const radius = centralCircleDiameter / 2 + childNodeDiameter + radiusPadding
	for (let i = 0; i < num; i++) {
		const angle = (i / num) * 2 * Math.PI - Math.PI / 2
		const x =
			centralCircleDiameter / 2 +
			radius * Math.cos(angle) -
			childNodeDiameter / 2
		const y =
			centralCircleDiameter / 2 +
			radius * Math.sin(angle) -
			childNodeDiameter / 2

		positions.push([x, y])
	}

	function centralClick() {
		if (selectedRef.current === null) return
		if (props.topLevel) return
		if (active) {
			gsap.to(active, {
				duration: 1.5,
				'--outline-width': '15px',
				'--outline-height': '15px',
				'--outline-opacity': 0,
				ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
			})
		}
		gsap.to(selectedRef.current, {
			duration: 1.5,
			'--outline-width': '200px',
			'--outline-height': '200px',
			'--outline-opacity': 1,
			ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
		})
		setActive(selectedRef.current)
	}
	function nodeClick(event, i) {
		const target = event.currentTarget
		if (active) {
			if (active === selectedRef.current) {
				gsap.to(active, {
					duration: 1.5,
					'--outline-width': '150px',
					'--outline-height': '150px',
					'--outline-opacity': 0,
					ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
				})
			} else {
				gsap.to(active, {
					duration: 1.5,
					'--outline-width': '15px',
					'--outline-height': '15px',
					'--outline-opacity': 0,
					ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
				})
			}
		}
		gsap.to(target, {
			duration: 1.5,
			'--outline-width': '37px',
			'--outline-height': '37px',
			'--outline-opacity': 1,
			ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
		})
		setActive(target)
		console.log(active)
	}
	function next(i) {
		if (active) {
			if (active === selectedRef.current) {
				return null
			} else {
				gsap.to(active, {
					duration: 1.5,
					'--outline-width': '25px',
					'--outline-height': '25px',
					'--outline-opacity': 0,
					ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
				})
			}
		}
		if (i < props.data.length - 1) {
			i++
		} else {
			i = 0
		}
		// const target = props.data[i]
		const t = document.querySelector(`[data-index="${i}"]`)
		gsap.to(t, {
			duration: 1.5,
			'--outline-width': '37px',
			'--outline-height': '37px',
			'--outline-opacity': 1,
			ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
		})
		setActive(t)
	}
	function previous(i) {
		if (active) {
			if (active === selectedRef.current) {
				return null
			} else {
				gsap.to(active, {
					duration: 1.5,
					'--outline-width': '25px',
					'--outline-height': '25px',
					'--outline-opacity': 0,
					ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
				})
			}
		}
		if (i > 0) {
			i--
		} else {
			i = props.data.length - 1
		}
		// const target = props.data[i]
		const t = document.querySelector(`[data-index="${i}"]`)
		gsap.to(t, {
			duration: 1.5,
			'--outline-width': '37px',
			'--outline-height': '37px',
			'--outline-opacity': 1,
			ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
		})
		setActive(t)
	}
	const renderContent = () => {
		if (active && active === selectedRef.current) {
			return (
				<Enter key='Read' url={props.title} read={true}>
					<p className={styles.shimmer}>Read</p>
				</Enter>
			)
		} else if (active && active.getAttribute('data-clickable') === 'true') {
			return (
				<Enter
					key='Enter'
					backgroundColor='blue'
					url={active.getAttribute('data-name')}
				>
					<p className={styles.shimmer}>Enter</p>
				</Enter>
			)
		} else if (
			active &&
			active.getAttribute('data-clickable') === 'false'
		) {
			return (
				<Enter key='WIP' backgroundColor='purple'>
					<p className={styles.shimmer}>WIP</p>
				</Enter>
			)
		} else {
			return null
		}
	}

	return (
		<>
			<div className={styles.center}>
				{positions.map((pos, i) => {
					const isClickable =
						props.data[i].hasChildren !== undefined
							? props.data[i].hasChildren
							: props.data[i].num_grandchild_nodes === 0
					return (
						<div
							onClick={(event) => nodeClick(event, i)}
							key={i}
							className={styles.child}
							style={{
								left: pos[0],
								top: pos[1],
								position: 'absolute',
							}}
							data-name={props.data[i].name}
							data-index={i}
							data-clickable={isClickable ? 'true' : 'false'}
						></div>
					)
				})}
			</div>

			<MobileCenter
				title={props.title}
				topLevel={props.topLevel}
				ref={selectedRef}
				onClick={centralClick}
			/>
			<InfoBar
				data={active}
				next={next}
				previous={previous}
				count={positions.length}
			/>
			<AnimatePresence mode='wait'>{renderContent()}</AnimatePresence>
		</>
	)
}

export default MobileNavigation

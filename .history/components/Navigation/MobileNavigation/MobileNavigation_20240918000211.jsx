import MobileCenter from './MobileCenter/MobileCenter'
import InfoBar from './InfoBar/InfoBar'
import styles from './MobileNavigation.module.css'
import { useRef, useState } from 'react'
import Enter from './Enter/Enter'
import gsap from 'gsap'
import { AnimatePresence, motion } from 'framer-motion'

function MobileNavigation(props) {
	const selectedRef = useRef()
	const angles = []
	const positions = []
	const [active, setActive] = useState(null)
	const num = props.count
	const centralCircleDiameter = 400
	const childNodeDiameter = 15
	const parentNodeDiamater = 15
	const radiusPadding = 0 // Adjust this to your needs
	const radius = centralCircleDiameter / 2 + childNodeDiameter + radiusPadding
	console.log(props.data)
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
			'--outline-width': '230px',
			'--outline-height': '230px',
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
					'--outline-width': '200px',
					'--outline-height': '200px',
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
			'--outline-width': '27px',
			'--outline-height': '27px',
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
					'--outline-width': '15px',
					'--outline-height': '15px',
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
			'--outline-width': '27px',
			'--outline-height': '27px',
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
					'--outline-width': '15px',
					'--outline-height': '15px',
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
			'--outline-width': '27px',
			'--outline-height': '27px',
			'--outline-opacity': 1,
			ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
		})
		setActive(t)
	}
	const componentMap = {
		stateValue1: (
			<Enter key={props.topLevel ? 'read' : 'enter'}>
				<p>{props.topLevel ? 'Read' : 'Enter'}</p>
			</Enter>
		),
		stateValue1: (
			<Enter key={props.topLevel ? 'read' : 'enter'}>
				<p>{props.topLevel ? 'Read' : 'Enter'}</p>
			</Enter>
		),
		stateValue1: (
			<Enter key={props.topLevel ? 'read' : 'enter'}>
				<p>{props.topLevel ? 'Read' : 'Enter'}</p>
			</Enter>
		),
	}

	return (
		<>
			<div className={styles.center}>
				{positions.map((pos, i) => {
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
							data-clickable={props.data[i].hasChildren}
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
			<InfoBar data={active} next={next} previous={previous} />
			<AnimatePresence mode='wait'>
				{/* {active && props.topLevel && (
					<Enter key='Read'>
						<p>Read</p>
					</Enter>
				)}
				{active && active.getAttribute('data-clickable') === 'true' && (
					<Enter key='Enter'>
						<p>Enter</p>
					</Enter>
				)} */}
				{active && (
					<Enter key={props.topLevel ? 'read' : 'enter'}>
						<p>{props.topLevel ? 'Read' : 'Enter'}</p>
					</Enter>
				)}
			</AnimatePresence>
		</>
	)
}

export default MobileNavigation

import { CentralNode } from '../CentralNode/CentralNode'
import { ChildNodes } from '../ChildNodes/ChildNodes'
import MobileCenter from './MobileCenter/MobileCenter'
import styles from './MobileNavigation.module.css'
import { useRef, useState } from 'react'
import gsap from 'gsap'

function MobileNavigation(props) {
	const selectedRef = useRef()
	const angles = []
	const positions = []
	const [active, setActive] = useState(null)
	const num = 5
	const centralCircleDiameter = 400
	const childNodeDiameter = 15
	const parentNodeDiamater = 15
	const radiusPadding = 0 // Adjust this to your needs
	const radius = centralCircleDiameter / 2 + childNodeDiameter + radiusPadding
	const parentRadius =
		centralCircleDiameter / 2 + parentNodeDiamater + radiusPadding
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

		const pX =
			centralCircleDiameter / 2 +
			parentRadius * Math.cos(angle) -
			parentNodeDiamater / 2
		const pY =
			centralCircleDiameter / 2 +
			parentRadius * Math.sin(angle) -
			parentNodeDiamater / 2

		const textX = (centralCircleDiameter / 4) * Math.cos(angle)
		const textY = (centralCircleDiameter / 4) * Math.sin(angle)
		// const

		angles.push(angle)
		positions.push([x, y, pX, pY])
	}

	function clickThing() {
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
	function clickSmall(event) {
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
	}

	return (
		<>
			<div className={styles.center}>
				{positions.map((pos, i) => {
					return (
						<div
							onClick={(event) => clickSmall(event)}
							key={i}
							className={styles.child}
							style={{
								left: pos[0],
								top: pos[1],
								position: 'absolute',
							}}
						></div>
					)
				})}
			</div>

			<MobileCenter
				title={props.title}
				topLevel={props.topLevel}
				ref={selectedRef}
				onClick={clickThing}
			/>
		</>
	)
}

export default MobileNavigation

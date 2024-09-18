import { CentralNode } from '../CentralNode/CentralNode'
import { ChildNodes } from '../ChildNodes/ChildNodes'
import MobileCenter from './MobileCenter/MobileCenter'
import styles from './MobileNavigation.module.css'
import { useRef } from 'react'
import gsap from 'gsap'

function MobileNavigation(props) {
	const selectedRef = useRef()
	const num = 5
	const centralCircleDiameter = 200
	const childNodeDiameter = 15
	const parentNodeDiamater = 45
	for (let i = 0; i < n; i++) {
		const angle = (i / n) * 2 * Math.PI - Math.PI / 2
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
		textPositions.push([textX, textY])
	}
	function clickThing() {
		if (selectedRef.current === null) return
		gsap.to(selectedRef.current, {
			duration: 1.5,
			'--outline-width': '230px',
			'--outline-height': '230px',
			'--outline-opacity': 1,
			ease: 'elastic.out(1, 0.5)', // Apply the elastic easing with custom parameters
		})
	}

	return (
		<MobileCenter
			title={props.title}
			topLevel={props.topLevel}
			ref={selectedRef}
			onClick={clickThing}
		/>
	)
}

export default MobileNavigation
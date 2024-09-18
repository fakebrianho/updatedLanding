import { CentralNode } from '../CentralNode/CentralNode'
import { ChildNodes } from '../ChildNodes/ChildNodes'
import MobileCenter from './MobileCenter/MobileCenter'
import styles from './MobileNavigation.module.css'
import { useRef } from 'react'
import gsap from 'gsap'

function MobileNavigation(props) {
	const selectedRef = useRef()
	function clickThing() {
		console.log('adf')
		if (selectedRef.current === null) return
		gsap.to(selectedRef.current, {
			duration: 1,
			'--outline-width': '230px',
			'--outline-height': '230px',
			'--outline-opacity': 1,
			ease: 'power2.out',
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

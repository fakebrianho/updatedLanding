import { CentralNode } from '../CentralNode/CentralNode'
import { ChildNodes } from '../ChildNodes/ChildNodes'
import MobileCenter from './MobileCenter/MobileCenter'
import styles from './MobileNavigation.module.css'
import { useRef } from 'react'
import gsap from 'gsap'

function MobileNavigation(props) {
	const selectedRef = useRef()
	function clickThing() {
		if (selectedRef.current === null) return
		gsap.to(selectedRef.current, {
			duration: 0.3,
			scale: 1.1,
			ease: 'expo.out',
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

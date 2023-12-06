import cn from 'clsx'
import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'
// import s from './cursor.module.scss'
import s from './cursor.module.css'
import usePage from '../../context/pageContext'

function Cursor(props) {
	const cursor = useRef()
	const cursorText = useRef()
	const [isGrab, setIsGrab] = useState(false)
	const [isPointer, setIsPointer] = useState(false)
	const [hasMoved, setHasMoved] = useState(false)
	// const [isHovering, setIsHovering] = useState(false)
	const { isHovering, setHoverStatus } = usePage()
	const onMouseMove = useCallback(
		({ clientX, clientY }) => {
			gsap.to(cursor.current, {
				x: clientX,
				y: clientY,
				duration: hasMoved ? 0.6 : 0,
				ease: 'expo.out',
			})
			setHasMoved(true)
		},
		[hasMoved]
	)

	useEffect(() => {
		const body = document.body
		if (props.hoverState) {
			cursor.current.classList.add('hover-cursor')
			cursorText.current.classList.add('active')
			if (props.clickState) {
				cursorText.current.innerHTML = 'ENTER'
			} else if (!props.clickState) {
				if (props.topLevel) {
					cursorText.current.innerHTML = 'WIP'
				} else {
					cursorText.current.innerHTML = 'READ'
				}
			}
		} else {
			cursor.current.classList.remove('hover-cursor')
			cursorText.current.classList.remove('active')
			cursorText.current.innerHTML = ''
		}
	}, [props.hoverState, props.clickState, props.parentLicense])

	useEffect(() => {
		document.body.addEventListener('mousemove', onMouseMove)
		return () => {
			document.body.removeEventListener('mousemove', onMouseMove)
		}
	}, [])

	return (
		<div
			// style={{ opacity: hasMoved ? 0.4 : 0 }}
			id='custom-cursor'
			className={cn(s.cursor, isGrab && s.grab, isPointer && s.pointer, {
				'hover-cursor': props.hoverState,
				'normal-cursor': !props.hoverState,
			})}
			ref={cursor}
		>
			<p ref={cursorText} className='cursorText'></p>
		</div>
	)
}

export { Cursor }

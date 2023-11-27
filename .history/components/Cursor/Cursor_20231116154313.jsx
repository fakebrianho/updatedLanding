import cn from 'clsx'
import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'
// import s from './cursor.module.scss'
import s from './cursor.module.css'

function Cursor() {
	const cursor = useRef()
	const [isGrab, setIsGrab] = useState(false)
	const [isPointer, setIsPointer] = useState(false)
	const [hasMoved, setHasMoved] = useState(false)
	const [isHovering, setIsHovering] = useState(false)

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
	const checkHover = (element) => {
		// Check if the element or any of its ancestors have the data-cursor attribute
		while (element && element !== document.body) {
			if (element.matches && element.matches("[data-cursor='pointer']")) {
				return true
			}
			element = element.parentElement
		}
		return false
	}
	const onMouseOver = (event) => {
		if (checkHover(event.target)) {
			setIsHovering(true)
		} else {
			setIsHovering(false)
		}
	}

	const onMouseOut = (event) => {
		// Reset hover state when cursor leaves the element
		if (event.target.matches("[data-cursor='pointer']")) {
			setIsHovering(false)
		}
	}

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove, false)

		return () => {
			window.removeEventListener('mousemove', onMouseMove, false)
		}
	}, [hasMoved, onMouseMove])
	useEffect(() => {
		document.body.addEventListener('mouseover', onMouseOver)

		return () => {
			document.body.removeEventListener('mouseover', onMouseOver)
		}
	}, [])

	// useEffect(() => {
	// 	document.documentElement.classList.add('has-custom-cursor')

	// 	return () => {
	// 		document.documentElement.classList.remove('has-custom-cursor')
	// 	}
	// }, [])

	// useEffect(() => {
	// 	let elements = []

	// 	const onMouseEnter = () => {
	// 		setIsPointer(true)
	// 	}
	// 	const onMouseLeave = () => {
	// 		setIsPointer(false)
	// 	}

	// 	elements = [
	// 		...document.querySelectorAll(
	// 			"div,button,a,input,label,[data-cursor='pointer']"
	// 		),
	// 	]

	// 	elements.forEach((element) => {
	// 		element.addEventListener('mouseenter', onMouseEnter, false)
	// 		element.addEventListener('mouseleave', onMouseLeave, false)
	// 	})

	// 	return () => {
	// 		elements.forEach((element) => {
	// 			element.removeEventListener('mouseenter', onMouseEnter, false)
	// 			element.removeEventListener('mouseleave', onMouseLeave, false)
	// 		})
	// 	}
	// }, [])

	// useEffect(() => {
	// 	let elements = []

	// 	const onMouseEnter = () => {
	// 		setIsGrab(true)
	// 	}
	// 	const onMouseLeave = () => {
	// 		setIsGrab(false)
	// 	}
	// 	const elem = document.querySelectorAll('[data-cursor="pointer"]')
	// 	elements = [...document.querySelectorAll("[data-cursor='pointer']")]

	// 	elements.forEach((element) => {
	// 		element.addEventListener('mouseenter', onMouseEnter, false)
	// 		element.addEventListener('mouseleave', onMouseLeave, false)
	// 	})

	// 	return () => {
	// 		elements.forEach((element) => {
	// 			element.removeEventListener('mouseenter', onMouseEnter, false)
	// 			element.removeEventListener('mouseleave', onMouseLeave, false)
	// 		})
	// 	}
	// }, [])

	return (
		// <div style={{ opacity: hasMoved ? 1 : 0 }} className={s.container}>
		// 	<div ref={cursor}>
		// 		<div
		// 			className={cn(
		// 				s.cursor,
		// 				isGrab && s.grab,
		// 				isPointer && s.pointer
		// 			)}
		// 		/>
		// 	</div>
		// </div>
		<div
			style={{ opacity: hasMoved ? 0.4 : 0 }}
			className={cn(s.cursor, isGrab && s.grab, isPointer && s.pointer, {
				'hover-cursor': isHovering,
				'normal-cursor': !isHovering,
			})}
			ref={cursor}
		/>
	)
}

export { Cursor }

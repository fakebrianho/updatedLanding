// 'use client'
import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	useLayoutEffect,
	useRef,
} from 'react'
import Lenis from '@studio-freight/lenis'
// import debounce from '../utils/debounce'
// import { Cursor } from '../components/Cursor/Cursor'
const PageContext = createContext({
	lenis: null,
	toggleScrolling: () => {},
	isScrollingEnabled: true,
	isHovering: false,
	setHoverStatus: () => {},
	isDarkMode: true,
	setIsDarkMode: () => {},
})
export const PageProvider = ({ children }) => {
	const [lenis, setLenis] = useState()
	const [isScrollingEnabled, setIsScrollingEnabled] = useState(true)
	const [isHovering, setIsHovering] = useState(false) // Added state for hover status
	const [isDarkMode, setIsDarkMode] = useState(true)
	const reqIdRef = useRef()

	const setScrolling = (enabled) => {
		setIsScrollingEnabled(true)
		if (lenis) {
			if (enabled) {
				lenis.start()
			} else {
				lenis.stop()
			}
		}
	}

	useEffect(() => {
		const animate = (time) => {
			lenis?.raf(time)
			reqIdRef.current = requestAnimationFrame(animate)
		}
		reqIdRef.current = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(reqIdRef.current)
	}, [lenis])

	useLayoutEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			smoothTouch: true,
			// touchMultiplier: 2,
		})

		lenis.stop()
		setLenis(lenis)

		return () => {
			lenis.destroy()
			setLenis(null)
		}
	}, [isScrollingEnabled])

	const memoedValue = useMemo(
		() => ({
			lenis,
			toggleScrolling: setScrolling,
			isScrollingEnabled,
			isHovering,
			setHoverStatus: setIsHovering, // Expose function to update hover status
			isDarkMode,
			setDarkMode: setIsDarkMode,
		}),
		[lenis, isScrollingEnabled, isHovering, isDarkMode]
	)

	return (
		<PageContext.Provider value={memoedValue}>
			{children}
		</PageContext.Provider>
	)
}

export default function usePage() {
	const contextValue = useContext(PageContext)
	return contextValue
}

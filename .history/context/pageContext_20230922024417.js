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
import debounce from '../utils/debounce'
const PageContext = createContext({
	lenis: null,
	toggleScrolling: () => {},
	isScrollingEnabled: true,
})
export const PageProvider = ({ children }) => {
	const [lenis, setLenis] = useState()
	const [isScrollingEnabled, setIsScrollingEnabled] = useState(true)

	const reqIdRef = useRef()

	const toggleScrolling = () => {
		setIsScrollingEnabled(!isScrollingEnabled)
		if (lenis) {
			if (isScrollingEnabled) {
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
		if (!isScrollingEnabled) return

		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			smoothTouch: false,
			touchMultiplier: 2,
		})

		let lastHeight = 0
		let hideNav = false
		let isScrolled = false

		lenis.on('scroll', ({ scroll }) => {
			debounce(() => (lastHeight = scroll))()

			if (lastHeight < scroll && scroll > 160 && !hideNav) {
				document.body.classList.add('hide_header')
				hideNav = true
			}
			if (lastHeight >= scroll && scroll > 160 && hideNav) {
				document.body.classList.remove('hide_header')
				hideNav = false
			}

			if (lastHeight < scroll && scroll > 220 && !isScrolled) {
				document.body.classList.add('scrolled')
				isScrolled = true
			}

			if (lastHeight >= scroll && scroll < 220 && isScrolled) {
				document.body.classList.remove('scrolled')
				isScrolled = false
			}
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
			toggleScrolling,
			isScrollingEnabled,
		}),
		[lenis, isScrollingEnabled]
	)

	return (
		<PageContext.Provider value={memoedValue}>
			{children}
		</PageContext.Provider>
	)
}

export default function usePage() {
	const contextValue = useContext(PageContext)
	console.log('Context Value in usePage:', contextValue)
	return contextValue
	return useContext(PageContext)
}

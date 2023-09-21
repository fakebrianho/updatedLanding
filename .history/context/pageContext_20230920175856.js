import {
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
})
export const PageProvider = ({ children }) => {
	const [lenis, setLenis] = useState()
	const reqIdRef = useRef()
	useLayoutEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001, -Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			smoothTouch: false,
			touchMultiplier: 2,
		})
		setLenis(lenis)
		return () => {
			lenis.destroy()
			setLenis(null)
		}
	}, [])
	useEffect(() => {
		const animate = (time) => {
			lenis?.raf(time)
			reqIdRef.current = requestAnimationFrame(animate)
		}
		re
	})
}

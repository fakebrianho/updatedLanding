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
		//
	})
}

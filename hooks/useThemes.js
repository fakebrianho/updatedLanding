// useTheme.js

import { useState, useEffect } from 'react'
import {
	getThemeFromLocalStorage,
	setThemeInLocalStorage,
} from '../utils/themeUtils'

const useTheme = () => {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const storedTheme = getThemeFromLocalStorage()
		setTheme(storedTheme)
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		setThemeInLocalStorage(newTheme)
	}

	return [theme, toggleTheme]
}

export default useTheme
